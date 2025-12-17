'use client'

import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    downVoteProjectAction,
    upVoteProjectAction
} from "@/lib/projects/project-actions";
import {useState} from "react";

export default function VotingButton({
                                         hasVoted,
                                         voteCount: initialVoteCount,
                                         productID
                                     }: {
    hasVoted: boolean;
    voteCount: number;
    productID: number;
}) {
    // ✅ sync initial state
    const [voted, setVoted] = useState(hasVoted);
    const [count, setCount] = useState(initialVoteCount);
    const [loading, setLoading] = useState(false);

    const handleVote = async () => {
        if (loading) return;

        setLoading(true);

        try {
            if (!voted) {
                await upVoteProjectAction(productID);
                setVoted(true);
                setCount((c) => c + 1);
            } else {
                await downVoteProjectAction(productID);
                setVoted(false);
                setCount((c) => c - 1);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="flex w-full"
            onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <Button
                className="flex gap-2 self-start"
                onClick={handleVote}
                disabled={loading}
            >
                <Heart
                    className={`transition ${
                        voted
                            ? "fill-red-400 text-red-400"
                            : "fill-transparent text-white"
                    }`}
                />
                <p>{count} Votes</p>
            </Button>
        </div>
    );
}
