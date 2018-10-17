import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-5">
                            <div>
                                <h4>ABOUT US</h4>
                                <p>
                                    THL Shop is established from 2018,
                                     we provide the printing services
                                    for phone back covers. This service apply
                                    for all kind of available smart phone.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-3 ">
                            <h4>POLICY</h4>
                            <ul>
                                <li>Delivery policy</li>
                                <li>Payment policy</li>
                                <li>Promotion policy</li>
                                <li>Insurance policy</li>
                                <li>Return policy</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 justify-content-center">
                            <div className="footer-title">
                                <h4>CONTACT</h4>
                            </div>
                            <div className="footer-icon">
                                <a href="https://www.facebook.com/%E1%BB%90p-L%C6%B0ng-%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ngh%E1%BB%87-Thu%E1%BA%ADt-288190271204684/?ref=bookmarks"
                                    className="fa fa-facebook"> Ốp Lưng Điện Thoại Nghệ Thuật</a>
                                <a href="#" className="fa fa-instagram"> instagram.com/oplung.nghethuat/</a>
                                <a href="#" className="fa fa-youtube-play"> THL Channel</a>
                                <a href="#" className="fa fa-address-card"> 29/2 Lê Quang Sung, Đà Nẵng</a>
                                <a href="#" className="	fa fa-mobile-phone"> 0935.96.49.49</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
