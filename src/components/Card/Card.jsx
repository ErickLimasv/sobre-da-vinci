import "./Card.css"

export default function Card({content}) {
    return (
        <article className="card">
            <div className="card-image">
                <img src={content.img.src} alt={content.img.alt} />
            </div>

            <div className="card-content">
                <h4 className="card-content-title">{content.title}</h4>
                <p className="card-content-text">{content.text}</p>
            </div>
        </article>
    )
}