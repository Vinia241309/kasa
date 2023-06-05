import './footer.css'
import logo from '../../assets/logo_footer.png'

function Footer() {
	return (
		<footer className='footer'>
			<img src={logo} alt="Kasa" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
export default Footer;
