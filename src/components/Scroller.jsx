export const Scroller = ({ prefix = "", items = [] }) => {
    return (
        <ul className="list-unstyled list-group position-sticky mb-4" style={{ top: "calc(56px + 1rem)" }}>
            {items.map((item, i) =>
                <li key={i}>
                    <a href={`#${prefix}-${i + 1}`} className="list-group-item list-group-item-action">{item}</a>
                </li>
            )}
        </ul>
    )
}
