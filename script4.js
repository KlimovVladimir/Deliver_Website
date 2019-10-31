                            function DropDown(el) {
                                this.ggg = el;
                                this.placeholder = this.ggg.children('span');
                                this.opts = this.ggg.find('ul.dropdown > li');
                                this.val = '';
                                this.index = -1;
                                this.initEvents();
                            }
                            DropDown.prototype = {
                                initEvents: function() {
                                    var obj = this;
                                    obj.ggg.on('click', function(event) {
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
                                var ggg = new DropDown($('#ggg'));
                                $(document).click(function() {
                                    // all dropdowns
                                    $('.wrapper-dropdown-3').removeClass('active');
                                });
                            });