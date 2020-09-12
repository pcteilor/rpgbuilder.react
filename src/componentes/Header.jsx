import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.css';
import '../styles/rpc-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Logo from '../img/LogoRPC-Branca.png'



function Header(){
	return(
	<>
		
		<div className="header-azul container-fluid">
			<div className="container py-2">
				<div className="row">
					<div className="col-md-2">
						<div className="px-4">
							<img src={Logo} className="img-fluid" alt="Logo RPC"/>
						</div>
					</div>
					<div className="col-md-7">
						<div className="text-center py-2">
							<h1 className="f-4 regular text-light">
								UNIVENDAS
							</h1>
						</div>
					</div>
					<div className="col-md-3 py-2">
						
						<a href="https://forms.gle/R5EFnkjAEz6upqi77" className="text-white">
							<small>
								<button type="button" className="btn btn-outline-light">
									<span className="px-3"><FontAwesomeIcon icon={faEnvelope} /> Fale Conosco</span>
								</button>	
							</small>
						</a>
						
					</div>
				</div>
				
			</div>
		</div>
	<div className="header-menu-azul" style={{height: "10px" ,}}></div>
	<div style={{height: "50px",}}></div>
	</>
	)
}

export default Header