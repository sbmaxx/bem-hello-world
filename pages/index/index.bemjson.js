({
    block: 'b-page',
    title: 'Hello World',
    head: [
        { elem: 'css', url: '_index.css'},
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'index.js' }
    ],
    content: [{
        block: 'b-test',
        content: {
            elem: 'link',
            content: 'кликни меня'
        }
    }]
})
