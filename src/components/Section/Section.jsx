import "./Section.css"
import Card from "../Card/Card"

export default function Section({id, title, content, icon, png}) {
    return (
        <section className="section" id={id}>
            <h2 className="section-title">{title} {icon}</h2>

            <div className="section-content">
                {content.map((item) => {
                    return <Card 
                        content={item}
                        key={item.id}
                        png={png}
                    />
                })}
            </div>
        </section>
    )
}