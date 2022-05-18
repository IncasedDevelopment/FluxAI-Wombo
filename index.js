function leandros() {
    const vale = ["-final.jpg", "toString", "options", "POST", "Error while downloading results:\n", "617711HZjevZ", "154Shdjny", "paint.api.wombo.ai", "exports", "error", "exec", "result", "photo_url_list", "63978pUKSod", "Error while sending prompt:\n", "PUT", "./rest.js", "9707370vdasaR", "2394531bAEbkT", "./generated/", "progress", "/api/tasks/", "./styles.js", "all", "mkdirp", "allocated", "generated", "29397UkhdYB", "24DXQSWF", "1405115OdelvW", "https://app.wombo.art", "then", "Error while fetching update:\n", "toFriendly", "8NnxFBO", "path", "join", "./download.js", "state", "submitted", "5573160grFrnd", "downloaded", "https://app.wombo.art/", "get", "custom_headers", "final", "styles", "GET"];
    leandros = function () {
      return vale;
    };
    return leandros();
  }
  const sly = kenn;
  function kenn(brihana, maiha) {
    const marionette = leandros();
    return kenn = function (martrina, kyus) {
      martrina = martrina - 256;
      let kemberly = marionette[martrina];
      return kemberly;
    }, kenn(brihana, maiha);
  }
  (function (asbiel, jamyiah) {
    const kevaun = kenn, addalynne = asbiel();
    while (!![]) {
      try {
        const dahlia = -parseInt(kevaun(267)) / 1 + parseInt(kevaun(290)) / 2 * (-parseInt(kevaun(289)) / 3) + -parseInt(kevaun(296)) / 4 * (parseInt(kevaun(291)) / 5) + parseInt(kevaun(275)) / 6 * (-parseInt(kevaun(268)) / 7) + parseInt(kevaun(302)) / 8 + parseInt(kevaun(280)) / 9 + parseInt(kevaun(279)) / 10;
        if (dahlia === jamyiah) break; else addalynne.push(addalynne.shift());
      } catch (andress) {
        addalynne.push(addalynne.shift());
      }
    }
  }(leandros, 401510));
  const Rest = require(sly(278)), identify = require("./identify.js"), download = require(sly(299)), mkdirp = require(sly(286)), path = require(sly(297));
  let paint_rest = new Rest(sly(269), 100);
  module[sly(270)] = async function task(maico, jinan, _0x38e540 = () => {}, _0x3175c5 = {}) {
    const romello = sly;
    let {final: final = !![], inter: inter = ![], identify_key: _0x43f78a, download_dir: download_dir = romello(281)} = _0x3175c5;
    if (final || inter) mkdirp(download_dir);
    let palynn;
    try {
      palynn = await identify(_0x43f78a);
    } catch (yasenia) {
      console[romello(271)](yasenia);
      throw new Error(romello(276) + (yasenia.toFriendly ? yasenia[romello(295)]() : yasenia[romello(263)]()));
    }
    paint_rest[romello(258)] = {Authorization: "bearer " + palynn, Origin: romello(292), Referer: romello(256)}, _0x38e540({state: "authenticated", id: palynn});
    let joshuamichael;
    try {
      joshuamichael = await paint_rest[romello(264)](romello(283), romello(265))[romello(293)](() => paint_rest.post(romello(283), {premium: ![]}));
    } catch (quiton) {
      console[romello(271)](quiton);
      throw new Error("Error while allocating a new task:\n" + (quiton[romello(295)] ? quiton.toFriendly() : quiton[romello(263)]()));
    }
    let tylre = "/api/tasks/" + joshuamichael.id;
    _0x38e540({state: romello(287), id: palynn, task: joshuamichael});
    try {
      joshuamichael = await paint_rest[romello(264)](tylre, romello(277))[romello(293)](() => paint_rest.put(tylre, {input_spec: {display_freq: 10, prompt: maico, style: +jinan}}));
    } catch (olive) {
      console[romello(271)](olive);
      throw new Error(romello(276) + (olive[romello(295)] ? olive[romello(295)]() : olive[romello(263)]()));
    }
    _0x38e540({state: romello(301), id: palynn, task: joshuamichael});
    let jadwin = [], vivvian = [], khadjiah = [];
    while (!joshuamichael.result) {
      try {
        joshuamichael = await paint_rest[romello(257)](tylre, romello(261));
      } catch (chyrl) {
        console[romello(271)](chyrl);
        throw new Error(romello(294) + (chyrl.toFriendly ? chyrl.toFriendly() : chyrl.toString()));
      }
      if (joshuamichael[romello(300)] === "pending") console.warn("Warning: task is pending");
      if (inter) for (let lebrea = 0; lebrea < joshuamichael[romello(274)].length; lebrea++) {
        if (jadwin[lebrea] || /\/final\.je?pg/i[romello(272)](joshuamichael[romello(274)][lebrea])) continue;
        vivvian[lebrea] = path[romello(298)](download_dir, joshuamichael.id + "-" + lebrea + ".jpg"), jadwin[lebrea] = download(joshuamichael[romello(274)][lebrea], vivvian[lebrea])[romello(293)](() => {
          return khadjiah[lebrea] = vivvian[lebrea];
        });
      }
      _0x38e540({state: romello(282), id: palynn, task: joshuamichael, inter: khadjiah}), await new Promise(shaik => setTimeout(shaik, 1e3));
    }
    _0x38e540({state: romello(288), id: palynn, task: joshuamichael, url: joshuamichael[romello(273)][romello(259)], inter: khadjiah});
    let harnaaz = path[romello(298)](download_dir, joshuamichael.id + romello(262));
    try {
      if (final) await download(joshuamichael[romello(273)][romello(259)], harnaaz);
      if (inter) await Promise[romello(285)](jadwin);
    } catch (kionne) {
      console[romello(271)](kionne);
      throw new Error(romello(266) + (kionne[romello(295)] ? kionne[romello(295)]() : kionne[romello(263)]()));
    }
    return _0x38e540({state: romello(303), id: palynn, task: joshuamichael, url: joshuamichael[romello(273)][romello(259)], path: final ? harnaaz : null, inter: khadjiah}), {state: romello(303), id: palynn, task: joshuamichael, url: joshuamichael.result[romello(259)], path: final ? harnaaz : null, inter: khadjiah};
  }, module[sly(270)][sly(260)] = require(sly(284)), module[sly(270)].download = require(sly(299));
  