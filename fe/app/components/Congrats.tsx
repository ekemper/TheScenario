import { FC } from "react"

const Congrats: FC = () => {
    return (
        <>
            <p className="my-36">
                You have no data! Create some!
            </p>
            <iframe
                src="https://giphy.com/embed/xT0xezQGU5xCDJuCPe"
                width="380"
                height="200"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen>
            </iframe>
        </>
    )
} 

export default Congrats