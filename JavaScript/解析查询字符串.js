function getQueryString() {
    var qs = (location.search.length > 0?location.search.substring(1):''),
        args = {},
        items = qs.length? qs.split('&'):[],
        item = null,
        name = null,
        value = null,
        i  = 0,
        len = items.length;

    for(i = 0;i < len;i++) {
        item = items[i].spilt('=');
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        if (name.length) {
            args[name] = value;
        }
    }

    return args;
}