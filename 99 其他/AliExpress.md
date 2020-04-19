# 速卖通模板开发

单个模块示例：

``` js
class Module extends Component {

    // 构造函数，同es6语法
    constructor(props) {
        super(props); // 固定写法，接受props
        this.state = { // 自定义state数据，只能在setState中更改
            result: []
            // ...
        }
    }

    // 生命周期函数，同React写法
    componentWillMount() {
        const {
            gdc,
            mds
        } = this.props;
        const mdc = mds.moduleData;
        // gdc.bizId   测试数据ID:200042360(用于模块调试阶段获取测试账号店铺信息) ;
        const data = openSdk.get('aliexpress.api.findProduct', {
            bizId: gdc.bizId,
            site: gdc.site,
            currency: gdc.currency,
            ssProductIds: mdc.productIds,
            ssSort: mdc.order,
            ssPageSize: mdc.productCount,
            ssSearchKeyword: mdc.Keyword
        });
        this.setState({
            result: data.success ? data.result : []
        })
    }
    // 其他自定义函数
    enter(i) {
        this.setState({
            event: i
        })
    }
    leave() {
        this.setState({
            event: -1
        })
    }
    render() {
        //先使用Object.assign处理内联样式合并，有好的方法在替换。
        const {
            mds
        } = this.props;
        const {
            event
        } = this.state;
        const mdc = mds.moduleData;
        if (mdc.target === true) {
            var target = "_blank";
        } else {
            var target = "_self";
        }
        let {
            productList
        } = this.state.result;
        let paddingTop = Number.parseInt(mdc.paddingTop || '80');
        let paddingBottom = Number.parseInt(mdc.paddingBottom || '100');
        let mk_bgDis = mds.moduleData.mk_bgDis == null || mds.moduleData.mk_bgDis == '1' ? '1' : '2';
        let mk_bgXg = mdc.mk_bgXg == null || mdc.mk_bgXg == 'scroll' ? 'scroll' : 'fixed';
        let tit_size = Number.parseInt(mdc.titsz || '40');

        let gd_zdy = mdc.gd_zdy ? mdc.gd_zdy : [{
            "img": "",
            "title": ""
        }];
        let gd_zdyIcon = mdc.gd_zdyIcon ? mdc.gd_zdyIcon : [{
            "icon": ""
        }];
        let itemList = [];
        if (this.state.result.productList.length != 0) {
            {
                this.state.result.productList.map((item, index) => (
                    itemList.push( < Link target = {
                            target
                        }
                        href = {
                            item.detailUrl
                        }
                        onMouseEnter = {
                            this.enter.bind(this, index)
                        }
                        onMouseLeave = {
                            this.leave.bind(this)
                        }
                        style = {
                            {
                                marginTop: index == 0 ? 0 : 40,
                                padding: 20,
                                boxShadow: event == index ? '0px 0px 20px gray' : '',
                                transition: 'all 0.3s',
                                width: 1200,
                                height: 400,
                                overflow: 'hidden',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                boxSizing: 'border-box',
                                fontFamily: 'Verdana',
                                background: mdc.gd_bg || '#fcfcfc',
                                borderColor: mdc.gd_bc || '#eee'
                            }
                        } >
                        <
                        View style = {
                            styles.item_bg
                        } >
                        <
                        Picture style = {
                            styles.item_img
                        }
                        source = {
                            {
                                uri: gd_zdy[index] && gd_zdy[index].img && gd_zdy[index].img.url ? gd_zdy[index].img.url : item.image350Url
                            }
                        }
                        /> {
                        /*角标开始*/
                    } {
                        (mdc.gd_discount == '1' && item.promotionDiscount != 0) && < View style = {
                                styles['gd_icon' + mdc.discount_val]
                            } >
                            <
                            Text style = {
                                styles['gd_discount' + mdc.discount_val]
                            } > {
                                item.promotionDiscount
                            } < /Text> < /
                            View >
                    } {
                        (mdc.gd_discount == '2' && gd_zdyIcon[0] && gd_zdyIcon[0].icon) && < Picture style = {
                            {
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }
                        }
                        source = {
                            {
                                uri: (gd_zdyIcon[index] && gd_zdyIcon[index].icon) ? gd_zdyIcon[index].icon.url : gd_zdyIcon[0].icon.url
                            }
                        }
                        />} {
                        /*角标结束*/
                    } <
                    /View>                                                                                                                                                                                   <
                    View style = {
                        styles.item_info
                    } >
                    <
                    Text style = {
                        Object.assign(styles.gd_title, {
                            color: mdc.gd_titlec || '#888'
                        })
                    }
                    numberOfLines = {
                        2
                    } > {
                        item.subject
                    } < /Text> <
                    Text style = {
                        Object.assign(styles.new_price, {
                            color: mdc.gd_pricec || '#000'
                        })
                    }
                    numberOfLines = {
                        1
                    } > {
                        item.promotionPiecePrice
                    } < /Text> <
                    Text style = {
                        Object.assign(styles.old_price, {
                            color: mdc.gd_oldPricec || '#999'
                        })
                    }
                    numberOfLines = {
                        1
                    } > {
                        item.piecePrice
                    } < /Text> <
                    Picture style = {
                        styles.item_btn
                    }
                    source = {
                        {
                            uri: mdc.item_btn && mdc.item_btn.url ? mdc.item_btn.url : 'https://ae01.alicdn.com/kf/Ha8879ac4b9f34115831c0f60f50df5a5v.jpg'
                        }
                    }
                    /> <
                    Text style = {
                        Object.assign(styles.sold, {
                            color: mdc.gd_salec || '#444'
                        })
                    }
                    numberOfLines = {
                        1
                    } > {
                        item.orders
                    } < /Text> < /
                    View > <
                    /Link>
                )))
        }
    }
    else {
        for (var i = 0; i < 3; i++) {
            itemList.push( < Link target = {
                        target
                    }
                    onMouseEnter = {
                        this.enter.bind(this, i)
                    }
                    onMouseLeave = {
                        this.leave.bind(this)
                    }
                    style = {
                        {
                            marginTop: i == 0 ? 0 : 40,
                            padding: 20,
                            boxShadow: event == i ? '0px 0px 20px gray' : '',
                            transition: 'all 0.3s',
                            width: 1200,
                            height: 400,
                            overflow: 'hidden',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            boxSizing: 'border-box',
                            fontFamily: 'Verdana',
                            background: mdc.gd_bg || '#fcfcfc',
                            borderColor: mdc.gd_bc || '#eee'
                        }
                    } >
                    <
                    View style = {
                        styles.item_bg
                    } >
                    <
                    Picture style = {
                        styles.item_img
                    }
                    source = {
                        {
                            uri: i == 0 ? 'https://ae01.alicdn.com/kf/He39bc5fce70846f58e340e5d1aef81f2O.png' : (i == 1 ? 'https://ae01.alicdn.com/kf/H975760f8327c49ee8e03ae5a5a2cf92dw.png' : 'https://ae01.alicdn.com/kf/Hf388e64a14b041dd881c3e2aa58f3ccaq.jpg')
                        }
                    }
                    /> {
                    /*角标开始*/
                } {
                    mdc.gd_discount == '1' && < View style = {
                            styles['gd_icon' + mdc.discount_val]
                        } >
                        <
                        Text style = {
                            styles['gd_discount' + mdc.discount_val]
                        } > 20 < /Text> < /
                        View >
                } {
                    (mdc.gd_discount == '2' && gd_zdyIcon[0] && gd_zdyIcon[0].icon) && < Picture style = {
                        {
                            position: 'absolute',
                            top: 0,
                            left: 0
                        }
                    }
                    source = {
                        {
                            uri: (gd_zdyIcon[i] && gd_zdyIcon[i].icon) ? gd_zdyIcon[i].icon.url : gd_zdyIcon[0].icon.url
                        }
                    }
                    />} {
                    /*角标结束*/
                } <
                /View> <
            View style = {
                    styles.item_info
                } >
                <
                Text style = {
                    styles.gd_title
                }
            numberOfLines = {
                2
            } > The background editor displays the name of the product The editor displays the name of the product...... < /Text> <
            Text style = {
                styles.new_price
            }
            numberOfLines = {
                1
            } > US $28 .00 < /Text> <
            Text style = {
                styles.old_price
            }
            numberOfLines = {
                1
            } > US $36 .55 < /Text> <
            Picture style = {
                styles.item_btn
            }
            source = {
                {
                    uri: 'https://ae01.alicdn.com/kf/Ha8879ac4b9f34115831c0f60f50df5a5v.jpg'
                }
            }
            /> <
            Text style = {
                styles.sold
            }
            numberOfLines = {
                    1
                } > 1035 sold < /Text> < /
                View > <
                /Link>
        )
    }
}
return ( <
    View style = {
        {
            width: 1200,
            margin: 'auto'
        }
    } >
    <
    View style = {
        Object.assign(styles.wm1920, {
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            background: "url('" + (mk_bgDis == '1' ? (mdc.mk_bgImg ? mdc.mk_bgImg.url : '') : "") + "') center top no-repeat " + mk_bgXg,
            backgroundColor: (mdc.mk_bg || '#fff')
        })
    } > {
        mdc.titles != '3' && mdc.titles == '1' && mdc.btit && < View style = {
            Object.assign(styles.tit_box, {
                fontFamily: 'Verdana'
            })
        } >
        <
        Text style = {
            Object.assign(styles.btit, {
                fontSize: tit_size,
                color: mdc.btitc || '#000',
                fontFamily: mdc.titff
            })
        } > {
            mdc.btit
        } < /Text> <
        Text style = {
            Object.assign(styles.stit, {
                color: mdc.stitc || '#666'
            })
        } > {
            mdc.stit
        } < /Text> < /
        View >
    } {
        mdc.titles != '3' && mdc.titles == '2' && < Link target = {
            target
        }
        href = {
            mdc.hb_pic_link ? mdc.hb_pic_link : ''
        }
        style = {
                styles.hb_pic
            } >
            <
            Picture
        style = {
            {
                width: mdc.hb_pic && mdc.hb_pic.width ? mdc.hb_pic.width : '',
                height: mdc.hb_pic && mdc.hb_pic.height ? mdc.hb_pic.height : '',
                margin: '0 auto',
                display: 'block'
            }
        }
        source = {
            {
                uri: mdc.hb_pic && mdc.hb_pic.url ? mdc.hb_pic.url : ''
            }
        }
        /> < /
        Link >
    } <
    View style = {
        styles.wm_item
    } >
    <
    View style = {
        styles.product_box
    } > {
        itemList
    } < /View> < /
    View > <
    /View> < /
    View >
);
}
};
```

