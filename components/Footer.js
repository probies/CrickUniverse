import Link from 'next/link';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="pt-5">
                <div className="container-fluid  bg-black text-white pt-4">   
                
        <div className="row">
          {/* Column1 */}
          <div className="col-md-3 text-center">
            <h1 className="text-3xl pb-3 ">CrickUniverse</h1>
            <a href="https://www.instagram.com/wearecrickuniverse/"><i className="fa fa-instagram fa-lg pr-4"></i></a> 
            <a href="https://www.facebook.com/CrickUniverse-107951737739430"><i className="fa fa-facebook fa-lg pr-4"></i></a>
            <a href="https://twitter.com/CrickUniverse"><i className="fa fa-twitter fa-lg pb-5"></i></a>
          </div>
          {/* Column2 */}
          <div className="col-md-3 pb-3">
            <h4 className="text-2xl">At CrickUniverse</h4>
            <ui className="list-unstyled text-xl">
              <li><Link href={`/blogs`}><a className="text-white">Cricket News</a></Link></li>
              <li><Link href={`/categories/fantasyxi`}><a className="text-white">Fantasy XI Preview</a></Link></li>
              <li><Link href={`/categories/schedule`}><a className="text-white">Cricket Calendar</a></Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col-md-3 pb-3">
            <h1 className="text-2xl">Get Connected</h1>
            <ui className="list-unstyled text-xl">
              <li><a href="https://www.instagram.com/wearecrickuniverse/" className="text-white">Instagram</a></li>
              <li><a href="https://www.facebook.com/CrickUniverse-107951737739430" className="text-white">Facebook </a></li>
              <li><a href="https://twitter.com/CrickUniverse" className="text-white">Twitter</a></li>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col-md-3 pb-3">
            <h4 className="text-2xl ">Company</h4>
            <ui className="list-unstyled text-xl">
              <li><Link href={`/policies`}><a  className="text-white">Terms of Service</a></Link></li>
              <li><Link href={`/policies`}><a  className="text-white">Privacy Policy</a></Link></li>
              <li><Link href={`/contact`}><a  className="text-white">Contact Us</a></Link></li>
            </ui>
          </div>
        </div>
        <hr color="White"/>
        <div className="row text-center text-l">
          <p className="col-sm pb-1">
            &copy;{new Date().getFullYear()} CrickUniverse.com | All rights reserved 
          </p>
        </div>
              </div>       
                
            </footer>
        </React.Fragment>
    );
};

export default Footer;