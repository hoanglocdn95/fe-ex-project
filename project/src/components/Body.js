import React, { Component } from 'react';
import ShowItem from './ShowItem';
import { fetchItemHot, fetchItemNew, fetchAll } from '../actions'
import { connect } from 'react-redux';

class Body extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: this.props.listHot,
            listAll: this.props.listAll
        };
    }
    show = (value) => {
        switch (value) {
            case 'RECENTLY':
                var listItem;
                if (localStorage.getItem("recently")!==null) {
                    listItem = JSON.parse(localStorage.recently);
                } else {
                    listItem = [];
                }
                this.setState({
                    list: listItem
                });
                break;
            case 'HOT':
                this.setState({
                    list: this.props.listHot
                });
                break;
            case 'NEW':
                this.setState({
                    list: this.props.listNew
                });
                break;
            default:
                this.setState({
                    list: this.props.listHot
                });
        }
    }
    componentDidMount() {
        document.title = "THL Shop";
        this.props.showHot();
        this.props.showNew();
        this.props.showAll();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            list: nextProps.listHot,
            listAll: nextProps.listAll
        })
    }
    render() {

        return (
            <div className="container-fluid">
                <div id="body">
                    <div>
                        <img src="/lib/img/banner.png" className="img-fluid w-100 h-auto" alt="banner"></img>
                    </div>
                    <div id="body-banner">
                        <div className="body-banner-list">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="body-banner-list-name col-6 col-lg-4" id="bbln-1"
                                        onClick={() => this.show('HOT')}>HOT</div>
                                    <div className="body-banner-list-name col-6 col-lg-4" id="bbln-2"
                                        onClick={() => this.show('NEW')}>NEW</div>
                                    <div className="body-banner-list-name col-12 col-lg-4" id="bbln-3"
                                        onClick={() => this.show('RECENTLY')}>RECENTLY</div>
                                </div>
                            </div>
                        </div>
                        <div className="body-banner">
                            <div className="container-fluid">
                                <ShowItem list={this.state.list} />
                            </div>
                        </div>
                    </div>
                    <div id="body-list">
                        <div className="body-list-filter">
                            <div className="row">
                                <div className="col-12 col-xs-4 col-sm-4 blf-name">
                                    <h3>ALL PRODUCTS</h3>
                                </div>
                                <div className="blf-title input-group col-12 col-xs-8 col-sm-8">
                                    <input type="button" className="blf-title-type" value="PRICE(low to high)"></input>
                                    <input type="button" className="blf-title-type" value="ALPHABET"></input>
                                    <input type="button" className="blf-title-type" value="CLASSIFY"></input>
                                    <input type="submit" value="FILTER"></input>
                                </div>
                            </div>
                        </div>
                        <div className="body-list-product">
                            <div className="blp-page">
                                <i className="fa fa-angle-double-left"></i>
                                <i className="fa fa-angle-double-right"></i>
                            </div>
                            <div className="container-fluid">
                                <ShowItem list={this.state.listAll} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listHot: state.showHot,
    listNew: state.showNew,
    listRecently: state.showRecently,
    listAll: state.showAll,
})
const mapDispatchToProps = (dispatch, props) => ({
    showHot: () => dispatch(fetchItemHot()),
    showNew: () => dispatch(fetchItemNew()),
    showAll: () => dispatch(fetchAll())
})
export default connect(mapStateToProps, mapDispatchToProps)(Body);
