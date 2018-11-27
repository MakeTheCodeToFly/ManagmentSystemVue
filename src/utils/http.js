function setHeaders(xhr) {
    // xhr.setRequestHeader("Content-Type", "application/json");
}
//公共ajax方法
const http = ({url = '', data = {}, type = ''}  = {}) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: function (res) {
                resolve(res);
            },
            error: function (res) {
                reject(res);
            },
            complete: function (res) {
                resolve(res);
            },
            beforeSend: function(xhr) {
                setHeaders(xhr);
            }
        })
    })
}
module.exports = {
    get(url, data = {}, type = 'get') {
        return http({
            url,
            data,
            type
        })
    },
    post(url, data = {}, type = 'post') {
        return http({
            url,
            data,
            type
        })
    }
}