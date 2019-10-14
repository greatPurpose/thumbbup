import React, { Component } from "react";
import { connect } from "react-redux";
import {socialItems} from "../constants/mock";

const mapStateToProps = state => {
    return {
        data: dataSelector(state),
        pageNo: state.move.pageNo,
    };
};

const enhance = connect(mapStateToProps);
class Home extends Component {
    render() {
        return (
            <section id="home">
                <div className="social-icons">
                    {
                        socialItems.map((item, index) => {
                            return (
                                <a href={item.url} key={index} target="_blank" rel="noopener noreferrer">
                                    <img className="social-icon" src={item.img_url} alt="" />
                                </a>
                            );
                        })
                }
                </div>
                <div className="info">@ 2019</div>
            </section>
        );
    }
}