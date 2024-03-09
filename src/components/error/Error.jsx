import { Link } from "react-router-dom"

const Error = () => {
    return (
        <>
            <div className="container">
                <div className="error">
                   <div>
                   <h2>OPPS ! Look Like You Are Lost 🤨</h2>
                    <h3>404 Page Not Found !</h3>
                    <p><Link to={'/'}>Go Back</Link></p>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Error;