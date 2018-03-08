import React, { Component } from 'react';

export default class Pay extends Component {
    render() {
        return (
            <div className="pay">

                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">

                    <input type="hidden" name="business"
                           value="takemymoneytosavetheworld@gmail.com"/>

                        <input type="hidden" name="cmd" value="_donations"/>

                            <input type="hidden" name="item_name" value="Take my money"/>
                                <input type="hidden" name="item_number" value="One dollar to save the world"/>
                                    <input type="hidden" name="amount" value="1.00"/>
                                        <input type="hidden" name="currency_code" value="USD"/>

                                            <input type="image" name="submit"
                                                   src="https://i.imgur.com/xzVoOX7.png"
                                                   alt="Donate"/>
                                                <img alt="" width="1" height="1"
                                                     src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" />
                </form>
            </div>
        );
    }
}