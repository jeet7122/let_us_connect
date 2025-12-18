export default function AdminCard(
    {
        title,
        amount,
        className
    }: {title: string, amount: number, className?: string}
) {
    return (
        <div className={className}>
            <p className='font-light text-md'>{title}</p>
            <p className='font-semibold text-2xl'>{amount}</p>
        </div>
    )
}