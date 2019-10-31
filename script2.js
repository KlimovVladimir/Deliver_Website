                            function DropDown(el) {
                                this.bbb = el;
                                this.placeholder = this.bbb.children('span');
                                this.opts = this.bbb.find('ul.dropdown > li');
                                this.val = '';
                                this.index = -1;
                                this.initEvents();
                            }
                            DropDown.prototype = {
                                initEvents: function() {
                                    var obj = this;
                                    obj.bbb.on('click', function(event) {
                                        $(this).toggleClass('active');
                                        return false;
                                    });
                                    obj.opts.on('click', function() {
                                        var opt = $(this);
                                        obj.val = opt.text();
                                        obj.index = opt.index();
                                        obj.placeholder.text(obj.val);
                                    });
                                },
                                getValue: function() {
                                    return this.val;
                                },
                                getIndex: function() {
                                    return this.index;
                                }
                            }
                            $(function() {
                                var bbb = new DropDown($('#bbb'));
                                $(document).click(function() {
                                    // all dropdowns
                                    $('.wrapper-dropdown-3').removeClass('active');
                                });
                            });