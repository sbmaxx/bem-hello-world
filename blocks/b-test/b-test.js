BEM.DOM.decl('b-test', {

    _onClick: function() {
        this.setMod('clicked', 'yes');
    }

}, {

    live: function() {
        this.liveBindTo('link', 'click', function(e) {
            this._onClick(e);
        });
    }

})
