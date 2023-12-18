import { helix } from 'ldrs';
import "./css/Loader.css"

export const Loader = () => {
	helix.register()
    
    return (
        <div className="container-loader">
            <l-helix size={45} speed={2.5} color='black'> </l-helix>
        </div>
    )
};