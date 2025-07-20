import "./Section.css"
import Card from "../Card/Card"

export default function Section({id, title, content}) {
    return (
        <section className="section" id={id}>
            <h2>{title}</h2>

            <div className="section-content">
                {content.map((item) => {
                    return <Card 
                        content={item}
                        key={item.id}
                    />
                })}
            </div>
        </section>
    )
}