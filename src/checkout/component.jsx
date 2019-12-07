/* @flow */
/** @jsx node */

// Component

import { create } from 'zoid/src';
import * as zoid from 'zoid/dist/zoid.frameworks.js';
import { node, dom } from 'jsx-pragmatic/src';

export const CheckoutComponent = create({
    tag:        'checkout-component',
    dimensions: {
        width:  '500px',
        height: '500px'
    },
    url: ({ props }) => {
        return {
            demo:       'http://localhost:3000',
            production: 'https://my-site.com/login',
            test:       'mock://www.my-site.com/base/test/windows/login/index.htm'
        }[props.env];
    },
    defaultContext: 'popup',
    props:          {
        env: {
            type:    'string',
            default: () => 'production'
        },

        prefilledEmail: {
            type: 'string'
        }
    }
});

export const ButtonComponent = zoid.create({
    tag: 'button-component',

    dimensions: {
        width:  '300px',
        height: '300px'
    },

    url: ({ props }) => {
        return {
            demo:       './button.htm',
            production: 'https://my-site.com/login',
            test:       'mock://www.my-site.com/base/test/windows/login/index.htm'
        }[props.env];
    },

    props: {
        env: {
            type:    'string',
            default: () => 'production'
        },

        prefilledEmail: {
            type: 'string'
        }
    },

    defaultContext: __DEFAULT_CONTEXT__,

    prerenderTemplate({ doc } : { doc : Document }) : HTMLElement {
        return (
            <html>
                <head>
                    <style>
                        {`
                        .spinner {
                            position: absolute;
                            max-height: 60vmin;
                            max-width: 60vmin;
                            height: 40px;
                            width: 40px;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                            z-index: 10;
                        }

                        .spinner .loader {
                            height: 100%;
                            width: 100%;
                            box-sizing: border-box;
                            border: 3px solid rgba(0, 0, 0, .2);
                            border-top-color: rgba(33, 128, 192, 0.8);
                            border-radius: 100%;
                            animation: rotation .7s infinite linear;

                        }

                        @keyframes rotation {
                            from {
                                transform: rotate(0deg)
                            }
                            to {
                                transform: rotate(359deg)
                            }
                        }
                    `}
                    </style>
                </head>
                <body>
                    <div class="spinner">
                        <div id="loader" class="loader" />
                    </div>
                </body>
            </html>
        ).render(dom({ doc }));
    }
});
