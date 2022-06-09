import logo from '../assets/logoFooter.png'

const Footer = () =>{
    return(
        <footer>
        <div className='container'>
            <div className='row'><img src={logo} className='w-25' alt='Optionsfy Logo'/></div>
            <div className='row flex-column-reverse flex-md-row'>
                <p className='col-10 col-md-6'>Disclaimer: Please be aware that trading stocks, futures, stock options, and futures options involves a substantial risk of loss and is not suitable for all investors. Past performance is not necessarily indicative of future results. INFORMATION IS FOR GENERAL EDUCATIONAL AND RESEARCH PURPOSES AND SHOULD NOT BE CONSTRUED AS INDIVIDUAL INVESTMENT ADVICE. More info here</p>
                <ul className='col-10 col-md-6'>
                    <li><a href='#'>TERMS OF SERVICE</a></li>
                    <li><a href='#'>PRIVACY POLICY</a></li>
                    <li><a href='#'>DISCLAIMER</a></li>
                </ul>
            </div>
        </div>

        </footer>
    )
}

export default Footer