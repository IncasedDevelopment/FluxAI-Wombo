const _0x58d9d8 = _0x2ccd;
(function (_0x4ed973, _0x16c9f7) {
    const _0x43eacf = _0x2ccd,
        _0x198747 = _0x4ed973();
    while (!![]) {
        try {
            const _0x24ab76 =
                parseInt(_0x43eacf(0x1b3)) / 0x1 +
                parseInt(_0x43eacf(0x1ad)) / 0x2 +
                -parseInt(_0x43eacf(0x1c2)) / 0x3 +
                -parseInt(_0x43eacf(0x1ba)) / 0x4 +
                parseInt(_0x43eacf(0x1b6)) / 0x5 +
                (parseInt(_0x43eacf(0x1ae)) / 0x6) * (-parseInt(_0x43eacf(0x1c1)) / 0x7) +
                (parseInt(_0x43eacf(0x1bc)) / 0x8) * (-parseInt(_0x43eacf(0x1af)) / 0x9);
            if (_0x24ab76 === _0x16c9f7) break;
            else _0x198747["push"](_0x198747["shift"]());
        } catch (_0x13b1ac) {
            _0x198747["push"](_0x198747["shift"]());
        }
    }
})(_0x50be, 0xa5290);
const Rest = require(_0x58d9d8(0x1c3)),
    fs = require("fs"),
    path = require(_0x58d9d8(0x1b0)),
    SECRET_PATH = path[_0x58d9d8(0x1b7)](path[_0x58d9d8(0x1b4)](__filename), "secret.json");
let identify_hostname = _0x58d9d8(0x1b5),
    identify_secret_key = "AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw";
if (fs[_0x58d9d8(0x1b8)](SECRET_PATH)) {
    let secret = JSON[_0x58d9d8(0x1c0)](fs[_0x58d9d8(0x1ac)](SECRET_PATH, _0x58d9d8(0x1bb)));
    if (secret[_0x58d9d8(0x1b9)]) identify_secret_key = secret[_0x58d9d8(0x1b9)];
    if (secret["identify_hostname"]) identify_hostname = secret[_0x58d9d8(0x1be)];
}
let identify_rest = new Rest(identify_hostname),
    identify_cache,
    identify_timeout = 0x0;
function _0x2ccd(_0x17c7bd, _0x569449) {
    const _0x50be31 = _0x50be();
    return (
        (_0x2ccd = function (_0x2ccd74, _0x2bd3f6) {
            _0x2ccd74 = _0x2ccd74 - 0x1ab;
            let _0x55fc75 = _0x50be31[_0x2ccd74];
            return _0x55fc75;
        }),
        _0x2ccd(_0x17c7bd, _0x569449)
    );
}
function _0x50be() {
    const _0x3083fb = [
        "40PhKLcM",
        "/v1/accounts:signUp?key=",
        "identify_hostname",
        "No\x20identify\x20key\x20provided\x20and\x20no\x20secret.json\x20found!",
        "parse",
        "1820YKoeVK",
        "1976583XqbsoW",
        "./rest.js",
        "expiresIn",
        "getTime",
        "readFileSync",
        "2604416vJsiRT",
        "8826lTkIfl",
        "2393874USLCBb",
        "path",
        "exports",
        "idToken",
        "936062YHjCsY",
        "dirname",
        "identitytoolkit.googleapis.com",
        "6608600NISVNz",
        "join",
        "existsSync",
        "identify_key",
        "2048972NCsEJV",
        "utf8",
    ];
    _0x50be = function () {
        return _0x3083fb;
    };
    return _0x50be();
}
function identify(_0x88165c) {
    const _0x1f0dc8 = _0x58d9d8;
    if (!_0x88165c) {
        if (identify_secret_key) _0x88165c = identify_secret_key;
        else throw new Error(_0x1f0dc8(0x1bf));
    }
    return new Date()[_0x1f0dc8(0x1ab)]() >= identify_timeout
        ? new Promise(async (_0x21694a, _0xe89c44) => {
              const _0x29124b = _0x1f0dc8;
              let _0x28ba3d = await identify_rest["post"](_0x29124b(0x1bd) + _0x88165c, { key: _0x88165c });
              (identify_cache = _0x28ba3d[_0x29124b(0x1b2)]), (identify_timeout = new Date()[_0x29124b(0x1ab)]() + 0x3e8 * +_0x28ba3d[_0x29124b(0x1c4)] - 0x7530), _0x21694a(identify_cache);
          })
        : new Promise((_0xed58f0) => {
              _0xed58f0(identify_cache);
          });
}
module[_0x58d9d8(0x1b1)] = identify;
