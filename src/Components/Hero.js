import headshot from "../images/headshot.jpg"

export default function Hero(){
    return (
        <>
        <h1>Ashley Dennis</h1>
        <h2>Software Engineer</h2>
        <img className="headshot" src={headshot} alt="woman smiling and standing by blue chair" />
        </>
    )

}