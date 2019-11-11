                            function DropDown(el) {
                                this.zzz = el;
                                this.placeholder = this.zzz.children('span');
                                this.opts = this.zzz.find('ul.dropdown > li');
                                this.val = '';
                                this.index = -1;
                                this.initEvents();
                            }
                            DropDown.prototype = {
                                initEvents: function() {
                                    var obj = this;
                                    obj.zzz.on('click', function(event) {
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
                                var zzz = new DropDown($('#zzz'));
                                $(document).click(function() {
                                    // all dropdowns
                                    $('.wrapper-dropdown-2').removeClass('active');
                                });
                            });