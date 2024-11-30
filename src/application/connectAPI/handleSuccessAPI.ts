export const handleSuccessAPI = (status?: number) => {
    switch (status) {
        case 201:
            alert('201 created success');
            break;
        case 202:
            alert('202 accepted success');
            break;
        case 203:
            alert('203 non-authoritative information success');
            break;
        case 204:
            alert('204 no content success');
            break;
        case 205:
            alert('205 reset content success');
            break;
        case 206:
            alert('206 partial content success');
            break;
        case 207:
            alert('207 multi-status success');
            break;
        case 208:
            alert('208 already reported success');
            break;
        default:
            break;
    }
}
