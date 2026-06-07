(function () {
	const e = document.createElement('link').relList;
	if (e && e.supports && e.supports('modulepreload')) return;
	for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
	new MutationObserver((a) => {
		for (const i of a)
			if (i.type === 'childList')
				for (const o of i.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(a) {
		const i = {};
		return (
			a.integrity && (i.integrity = a.integrity),
			a.referrerpolicy && (i.referrerPolicy = a.referrerpolicy),
			a.crossorigin === 'use-credentials'
				? (i.credentials = 'include')
				: a.crossorigin === 'anonymous'
					? (i.credentials = 'omit')
					: (i.credentials = 'same-origin'),
			i
		);
	}
	function r(a) {
		if (a.ep) return;
		a.ep = !0;
		const i = n(a);
		fetch(a.href, i);
	}
})();
function K() {}
function Xe(t, e) {
	for (const n in e) t[n] = e[n];
	return t;
}
function Nt(t) {
	return t();
}
function ut() {
	return Object.create(null);
}
function De(t) {
	t.forEach(Nt);
}
function Wt(t) {
	return typeof t == 'function';
}
function re(t, e) {
	return t != t ? e == e : t !== e || (t && typeof t == 'object') || typeof t == 'function';
}
function Qt(t) {
	return Object.keys(t).length === 0;
}
function Xt(t, e, n, r) {
	if (t) {
		const a = At(t, e, n, r);
		return t[0](a);
	}
}
function At(t, e, n, r) {
	return t[1] && r ? Xe(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function Vt(t, e, n, r) {
	if (t[2] && r) {
		const a = t[2](r(n));
		if (e.dirty === void 0) return a;
		if (typeof a == 'object') {
			const i = [],
				o = Math.max(e.dirty.length, a.length);
			for (let d = 0; d < o; d += 1) i[d] = e.dirty[d] | a[d];
			return i;
		}
		return e.dirty | a;
	}
	return e.dirty;
}
function Zt(t, e, n, r, a, i) {
	if (a) {
		const o = At(e, n, r, i);
		t.p(o, a);
	}
}
function Kt(t) {
	if (t.ctx.length > 32) {
		const e = [],
			n = t.ctx.length / 32;
		for (let r = 0; r < n; r++) e[r] = -1;
		return e;
	}
	return -1;
}
function lt(t) {
	const e = {};
	for (const n in t) n[0] !== '$' && (e[n] = t[n]);
	return e;
}
function dt(t) {
	return t == null ? '' : t;
}
function M(t, e) {
	t.appendChild(e);
}
function z(t, e, n) {
	t.insertBefore(e, n || null);
}
function A(t) {
	t.parentNode && t.parentNode.removeChild(t);
}
function ft(t) {
	return document.createElement(t);
}
function k(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function de(t) {
	return document.createTextNode(t);
}
function ot() {
	return de(' ');
}
function _e() {
	return de('');
}
function xt(t, e, n, r) {
	return (t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r));
}
function f(t, e, n) {
	n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ct(t, e) {
	for (const n in e) f(t, n, e[n]);
}
function Pe(t, e, n) {
	t.setAttributeNS('http://www.w3.org/1999/xlink', e, n);
}
function en(t) {
	return Array.from(t.childNodes);
}
function ye(t, e) {
	((e = '' + e), t.data !== e && (t.data = e));
}
function Lt(t, e, n, r) {
	n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? 'important' : '');
}
let Ye;
function Ue(t) {
	Ye = t;
}
function tn() {
	if (!Ye) throw new Error('Function called outside component initialization');
	return Ye;
}
function nn(t) {
	tn().$$.on_mount.push(t);
}
const Oe = [],
	mt = [];
let Se = [];
const ht = [],
	rn = Promise.resolve();
let nt = !1;
function an() {
	nt || ((nt = !0), rn.then(zt));
}
function rt(t) {
	Se.push(t);
}
const et = new Set();
let Me = 0;
function zt() {
	if (Me !== 0) return;
	const t = Ye;
	do {
		try {
			for (; Me < Oe.length; ) {
				const e = Oe[Me];
				(Me++, Ue(e), on(e.$$));
			}
		} catch (e) {
			throw ((Oe.length = 0), (Me = 0), e);
		}
		for (Ue(null), Oe.length = 0, Me = 0; mt.length; ) mt.pop()();
		for (let e = 0; e < Se.length; e += 1) {
			const n = Se[e];
			et.has(n) || (et.add(n), n());
		}
		Se.length = 0;
	} while (Oe.length);
	for (; ht.length; ) ht.pop()();
	((nt = !1), et.clear(), Ue(t));
}
function on(t) {
	if (t.fragment !== null) {
		(t.update(), De(t.before_update));
		const e = t.dirty;
		((t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(rt));
	}
}
function sn(t) {
	const e = [],
		n = [];
	(Se.forEach((r) => (t.indexOf(r) === -1 ? e.push(r) : n.push(r))),
		n.forEach((r) => r()),
		(Se = e));
}
const qe = new Set();
let we;
function Je() {
	we = { r: 0, c: [], p: we };
}
function Ge() {
	(we.r || De(we.c), (we = we.p));
}
function $(t, e) {
	t && t.i && (qe.delete(t), t.i(e));
}
function Y(t, e, n, r) {
	if (t && t.o) {
		if (qe.has(t)) return;
		(qe.add(t),
			we.c.push(() => {
				(qe.delete(t), r && (n && t.d(1), r()));
			}),
			t.o(e));
	} else r && r();
}
function Be(t, e) {
	Y(t, 1, 1, () => {
		e.delete(t.key);
	});
}
function Qe(t, e, n, r, a, i, o, d, l, c, m, u) {
	let s = t.length,
		h = i.length,
		w = s;
	const y = {};
	for (; w--; ) y[t[w].key] = w;
	const b = [],
		O = new Map(),
		N = new Map(),
		g = [];
	for (w = h; w--; ) {
		const C = u(a, i, w),
			J = n(C);
		let G = o.get(J);
		(G ? r && g.push(() => G.p(C, e)) : ((G = c(J, C)), G.c()),
			O.set(J, (b[w] = G)),
			J in y && N.set(J, Math.abs(w - y[J])));
	}
	const v = new Set(),
		S = new Set();
	function ee(C) {
		($(C, 1), C.m(d, m), o.set(C.key, C), (m = C.first), h--);
	}
	for (; s && h; ) {
		const C = b[h - 1],
			J = t[s - 1],
			G = C.key,
			L = J.key;
		C === J
			? ((m = C.first), s--, h--)
			: O.has(L)
				? !o.has(G) || v.has(G)
					? ee(C)
					: S.has(L)
						? s--
						: N.get(G) > N.get(L)
							? (S.add(G), ee(C))
							: (v.add(L), s--)
				: (l(J, o), s--);
	}
	for (; s--; ) {
		const C = t[s];
		O.has(C.key) || l(C, o);
	}
	for (; h; ) ee(b[h - 1]);
	return (De(g), b);
}
function un(t, e) {
	const n = {},
		r = {},
		a = { $$scope: 1 };
	let i = t.length;
	for (; i--; ) {
		const o = t[i],
			d = e[i];
		if (d) {
			for (const l in o) l in d || (r[l] = 1);
			for (const l in d) a[l] || ((n[l] = d[l]), (a[l] = 1));
			t[i] = d;
		} else for (const l in o) a[l] = 1;
	}
	for (const o in r) o in n || (n[o] = void 0);
	return n;
}
function q(t) {
	t && t.c();
}
function F(t, e, n, r) {
	const { fragment: a, after_update: i } = t.$$;
	(a && a.m(e, n),
		r ||
			rt(() => {
				const o = t.$$.on_mount.map(Nt).filter(Wt);
				(t.$$.on_destroy ? t.$$.on_destroy.push(...o) : De(o), (t.$$.on_mount = []));
			}),
		i.forEach(rt));
}
function R(t, e) {
	const n = t.$$;
	n.fragment !== null &&
		(sn(n.after_update),
		De(n.on_destroy),
		n.fragment && n.fragment.d(e),
		(n.on_destroy = n.fragment = null),
		(n.ctx = []));
}
function ln(t, e) {
	(t.$$.dirty[0] === -1 && (Oe.push(t), an(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(e / 31) | 0] |= 1 << (e % 31)));
}
function ae(t, e, n, r, a, i, o, d = [-1]) {
	const l = Ye;
	Ue(t);
	const c = (t.$$ = {
		fragment: null,
		ctx: [],
		props: i,
		update: K,
		not_equal: a,
		bound: ut(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(e.context || (l ? l.$$.context : [])),
		callbacks: ut(),
		dirty: d,
		skip_bound: !1,
		root: e.target || l.$$.root
	});
	o && o(c.root);
	let m = !1;
	if (
		((c.ctx = n
			? n(t, e.props || {}, (u, s, ...h) => {
					const w = h.length ? h[0] : s;
					return (
						c.ctx &&
							a(c.ctx[u], (c.ctx[u] = w)) &&
							(!c.skip_bound && c.bound[u] && c.bound[u](w), m && ln(t, u)),
						s
					);
				})
			: []),
		c.update(),
		(m = !0),
		De(c.before_update),
		(c.fragment = r ? r(c.ctx) : !1),
		e.target)
	) {
		if (e.hydrate) {
			const u = en(e.target);
			(c.fragment && c.fragment.l(u), u.forEach(A));
		} else c.fragment && c.fragment.c();
		(e.intro && $(t.$$.fragment), F(t, e.target, e.anchor, e.customElement), zt());
	}
	Ue(l);
}
class ie {
	$destroy() {
		(R(this, 1), (this.$destroy = K));
	}
	$on(e, n) {
		if (!Wt(n)) return K;
		const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
		return (
			r.push(n),
			() => {
				const a = r.indexOf(n);
				a !== -1 && r.splice(a, 1);
			}
		);
	}
	$set(e) {
		this.$$set && !Qt(e) && ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
	}
}
var dn =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
				? window
				: typeof global < 'u'
					? global
					: typeof self < 'u'
						? self
						: {},
	It = { exports: {} };
(function (t, e) {
	(function (n, r, a) {
		((t.exports = a()), (t.exports.default = a()));
	})('slugify', dn, function () {
		var n = JSON.parse(
				`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xA2":"cent","\xA3":"pound","\xA4":"currency","\xA5":"yen","\xA9":"(c)","\xAA":"a","\xAE":"(r)","\xBA":"o","\xC0":"A","\xC1":"A","\xC2":"A","\xC3":"A","\xC4":"A","\xC5":"A","\xC6":"AE","\xC7":"C","\xC8":"E","\xC9":"E","\xCA":"E","\xCB":"E","\xCC":"I","\xCD":"I","\xCE":"I","\xCF":"I","\xD0":"D","\xD1":"N","\xD2":"O","\xD3":"O","\xD4":"O","\xD5":"O","\xD6":"O","\xD8":"O","\xD9":"U","\xDA":"U","\xDB":"U","\xDC":"U","\xDD":"Y","\xDE":"TH","\xDF":"ss","\xE0":"a","\xE1":"a","\xE2":"a","\xE3":"a","\xE4":"a","\xE5":"a","\xE6":"ae","\xE7":"c","\xE8":"e","\xE9":"e","\xEA":"e","\xEB":"e","\xEC":"i","\xED":"i","\xEE":"i","\xEF":"i","\xF0":"d","\xF1":"n","\xF2":"o","\xF3":"o","\xF4":"o","\xF5":"o","\xF6":"o","\xF8":"o","\xF9":"u","\xFA":"u","\xFB":"u","\xFC":"u","\xFD":"y","\xFE":"th","\xFF":"y","\u0100":"A","\u0101":"a","\u0102":"A","\u0103":"a","\u0104":"A","\u0105":"a","\u0106":"C","\u0107":"c","\u010C":"C","\u010D":"c","\u010E":"D","\u010F":"d","\u0110":"DJ","\u0111":"dj","\u0112":"E","\u0113":"e","\u0116":"E","\u0117":"e","\u0118":"e","\u0119":"e","\u011A":"E","\u011B":"e","\u011E":"G","\u011F":"g","\u0122":"G","\u0123":"g","\u0128":"I","\u0129":"i","\u012A":"i","\u012B":"i","\u012E":"I","\u012F":"i","\u0130":"I","\u0131":"i","\u0136":"k","\u0137":"k","\u013B":"L","\u013C":"l","\u013D":"L","\u013E":"l","\u0141":"L","\u0142":"l","\u0143":"N","\u0144":"n","\u0145":"N","\u0146":"n","\u0147":"N","\u0148":"n","\u014C":"O","\u014D":"o","\u0150":"O","\u0151":"o","\u0152":"OE","\u0153":"oe","\u0154":"R","\u0155":"r","\u0158":"R","\u0159":"r","\u015A":"S","\u015B":"s","\u015E":"S","\u015F":"s","\u0160":"S","\u0161":"s","\u0162":"T","\u0163":"t","\u0164":"T","\u0165":"t","\u0168":"U","\u0169":"u","\u016A":"u","\u016B":"u","\u016E":"U","\u016F":"u","\u0170":"U","\u0171":"u","\u0172":"U","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017A":"z","\u017B":"Z","\u017C":"z","\u017D":"Z","\u017E":"z","\u018F":"E","\u0192":"f","\u01A0":"O","\u01A1":"o","\u01AF":"U","\u01B0":"u","\u01C8":"LJ","\u01C9":"lj","\u01CB":"NJ","\u01CC":"nj","\u0218":"S","\u0219":"s","\u021A":"T","\u021B":"t","\u0259":"e","\u02DA":"o","\u0386":"A","\u0388":"E","\u0389":"H","\u038A":"I","\u038C":"O","\u038E":"Y","\u038F":"W","\u0390":"i","\u0391":"A","\u0392":"B","\u0393":"G","\u0394":"D","\u0395":"E","\u0396":"Z","\u0397":"H","\u0398":"8","\u0399":"I","\u039A":"K","\u039B":"L","\u039C":"M","\u039D":"N","\u039E":"3","\u039F":"O","\u03A0":"P","\u03A1":"R","\u03A3":"S","\u03A4":"T","\u03A5":"Y","\u03A6":"F","\u03A7":"X","\u03A8":"PS","\u03A9":"W","\u03AA":"I","\u03AB":"Y","\u03AC":"a","\u03AD":"e","\u03AE":"h","\u03AF":"i","\u03B0":"y","\u03B1":"a","\u03B2":"b","\u03B3":"g","\u03B4":"d","\u03B5":"e","\u03B6":"z","\u03B7":"h","\u03B8":"8","\u03B9":"i","\u03BA":"k","\u03BB":"l","\u03BC":"m","\u03BD":"n","\u03BE":"3","\u03BF":"o","\u03C0":"p","\u03C1":"r","\u03C2":"s","\u03C3":"s","\u03C4":"t","\u03C5":"y","\u03C6":"f","\u03C7":"x","\u03C8":"ps","\u03C9":"w","\u03CA":"i","\u03CB":"y","\u03CC":"o","\u03CD":"y","\u03CE":"w","\u0401":"Yo","\u0402":"DJ","\u0404":"Ye","\u0406":"I","\u0407":"Yi","\u0408":"J","\u0409":"LJ","\u040A":"NJ","\u040B":"C","\u040F":"DZ","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"J","\u041A":"K","\u041B":"L","\u041C":"M","\u041D":"N","\u041E":"O","\u041F":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sh","\u042A":"U","\u042B":"Y","\u042C":"","\u042D":"E","\u042E":"Yu","\u042F":"Ya","\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"j","\u043A":"k","\u043B":"l","\u043C":"m","\u043D":"n","\u043E":"o","\u043F":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sh","\u044A":"u","\u044B":"y","\u044C":"","\u044D":"e","\u044E":"yu","\u044F":"ya","\u0451":"yo","\u0452":"dj","\u0454":"ye","\u0456":"i","\u0457":"yi","\u0458":"j","\u0459":"lj","\u045A":"nj","\u045B":"c","\u045D":"u","\u045F":"dz","\u0490":"G","\u0491":"g","\u0492":"GH","\u0493":"gh","\u049A":"KH","\u049B":"kh","\u04A2":"NG","\u04A3":"ng","\u04AE":"UE","\u04AF":"ue","\u04B0":"U","\u04B1":"u","\u04BA":"H","\u04BB":"h","\u04D8":"AE","\u04D9":"ae","\u04E8":"OE","\u04E9":"oe","\u0531":"A","\u0532":"B","\u0533":"G","\u0534":"D","\u0535":"E","\u0536":"Z","\u0537":"E'","\u0538":"Y'","\u0539":"T'","\u053A":"JH","\u053B":"I","\u053C":"L","\u053D":"X","\u053E":"C'","\u053F":"K","\u0540":"H","\u0541":"D'","\u0542":"GH","\u0543":"TW","\u0544":"M","\u0545":"Y","\u0546":"N","\u0547":"SH","\u0549":"CH","\u054A":"P","\u054B":"J","\u054C":"R'","\u054D":"S","\u054E":"V","\u054F":"T","\u0550":"R","\u0551":"C","\u0553":"P'","\u0554":"Q'","\u0555":"O''","\u0556":"F","\u0587":"EV","\u0621":"a","\u0622":"aa","\u0623":"a","\u0624":"u","\u0625":"i","\u0626":"e","\u0627":"a","\u0628":"b","\u0629":"h","\u062A":"t","\u062B":"th","\u062C":"j","\u062D":"h","\u062E":"kh","\u062F":"d","\u0630":"th","\u0631":"r","\u0632":"z","\u0633":"s","\u0634":"sh","\u0635":"s","\u0636":"dh","\u0637":"t","\u0638":"z","\u0639":"a","\u063A":"gh","\u0641":"f","\u0642":"q","\u0643":"k","\u0644":"l","\u0645":"m","\u0646":"n","\u0647":"h","\u0648":"w","\u0649":"a","\u064A":"y","\u064B":"an","\u064C":"on","\u064D":"en","\u064E":"a","\u064F":"u","\u0650":"e","\u0652":"","\u0660":"0","\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u067E":"p","\u0686":"ch","\u0698":"zh","\u06A9":"k","\u06AF":"g","\u06CC":"y","\u06F0":"0","\u06F1":"1","\u06F2":"2","\u06F3":"3","\u06F4":"4","\u06F5":"5","\u06F6":"6","\u06F7":"7","\u06F8":"8","\u06F9":"9","\u0E3F":"baht","\u10D0":"a","\u10D1":"b","\u10D2":"g","\u10D3":"d","\u10D4":"e","\u10D5":"v","\u10D6":"z","\u10D7":"t","\u10D8":"i","\u10D9":"k","\u10DA":"l","\u10DB":"m","\u10DC":"n","\u10DD":"o","\u10DE":"p","\u10DF":"zh","\u10E0":"r","\u10E1":"s","\u10E2":"t","\u10E3":"u","\u10E4":"f","\u10E5":"k","\u10E6":"gh","\u10E7":"q","\u10E8":"sh","\u10E9":"ch","\u10EA":"ts","\u10EB":"dz","\u10EC":"ts","\u10ED":"ch","\u10EE":"kh","\u10EF":"j","\u10F0":"h","\u1E62":"S","\u1E63":"s","\u1E80":"W","\u1E81":"w","\u1E82":"W","\u1E83":"w","\u1E84":"W","\u1E85":"w","\u1E9E":"SS","\u1EA0":"A","\u1EA1":"a","\u1EA2":"A","\u1EA3":"a","\u1EA4":"A","\u1EA5":"a","\u1EA6":"A","\u1EA7":"a","\u1EA8":"A","\u1EA9":"a","\u1EAA":"A","\u1EAB":"a","\u1EAC":"A","\u1EAD":"a","\u1EAE":"A","\u1EAF":"a","\u1EB0":"A","\u1EB1":"a","\u1EB2":"A","\u1EB3":"a","\u1EB4":"A","\u1EB5":"a","\u1EB6":"A","\u1EB7":"a","\u1EB8":"E","\u1EB9":"e","\u1EBA":"E","\u1EBB":"e","\u1EBC":"E","\u1EBD":"e","\u1EBE":"E","\u1EBF":"e","\u1EC0":"E","\u1EC1":"e","\u1EC2":"E","\u1EC3":"e","\u1EC4":"E","\u1EC5":"e","\u1EC6":"E","\u1EC7":"e","\u1EC8":"I","\u1EC9":"i","\u1ECA":"I","\u1ECB":"i","\u1ECC":"O","\u1ECD":"o","\u1ECE":"O","\u1ECF":"o","\u1ED0":"O","\u1ED1":"o","\u1ED2":"O","\u1ED3":"o","\u1ED4":"O","\u1ED5":"o","\u1ED6":"O","\u1ED7":"o","\u1ED8":"O","\u1ED9":"o","\u1EDA":"O","\u1EDB":"o","\u1EDC":"O","\u1EDD":"o","\u1EDE":"O","\u1EDF":"o","\u1EE0":"O","\u1EE1":"o","\u1EE2":"O","\u1EE3":"o","\u1EE4":"U","\u1EE5":"u","\u1EE6":"U","\u1EE7":"u","\u1EE8":"U","\u1EE9":"u","\u1EEA":"U","\u1EEB":"u","\u1EEC":"U","\u1EED":"u","\u1EEE":"U","\u1EEF":"u","\u1EF0":"U","\u1EF1":"u","\u1EF2":"Y","\u1EF3":"y","\u1EF4":"Y","\u1EF5":"y","\u1EF6":"Y","\u1EF7":"y","\u1EF8":"Y","\u1EF9":"y","\u2013":"-","\u2018":"'","\u2019":"'","\u201C":"\\"","\u201D":"\\"","\u201E":"\\"","\u2020":"+","\u2022":"*","\u2026":"...","\u20A0":"ecu","\u20A2":"cruzeiro","\u20A3":"french franc","\u20A4":"lira","\u20A5":"mill","\u20A6":"naira","\u20A7":"peseta","\u20A8":"rupee","\u20A9":"won","\u20AA":"new shequel","\u20AB":"dong","\u20AC":"euro","\u20AD":"kip","\u20AE":"tugrik","\u20AF":"drachma","\u20B0":"penny","\u20B1":"peso","\u20B2":"guarani","\u20B3":"austral","\u20B4":"hryvnia","\u20B5":"cedi","\u20B8":"kazakhstani tenge","\u20B9":"indian rupee","\u20BA":"turkish lira","\u20BD":"russian ruble","\u20BF":"bitcoin","\u2120":"sm","\u2122":"tm","\u2202":"d","\u2206":"delta","\u2211":"sum","\u221E":"infinity","\u2665":"love","\u5143":"yuan","\u5186":"yen","\uFDFC":"rial","\uFEF5":"laa","\uFEF7":"laa","\uFEF9":"lai","\uFEFB":"la"}`
			),
			r = JSON.parse(
				'{"bg":{"\u0419":"Y","\u0426":"Ts","\u0429":"Sht","\u042A":"A","\u042C":"Y","\u0439":"y","\u0446":"ts","\u0449":"sht","\u044A":"a","\u044C":"y"},"de":{"\xC4":"AE","\xE4":"ae","\xD6":"OE","\xF6":"oe","\xDC":"UE","\xFC":"ue","\xDF":"ss","%":"prozent","&":"und","|":"oder","\u2211":"summe","\u221E":"unendlich","\u2665":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xA2":"centavos","\xA3":"libras","\xA4":"moneda","\u20A3":"francos","\u2211":"suma","\u221E":"infinito","\u2665":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xA2":"centime","\xA3":"livre","\xA4":"devise","\u20A3":"franc","\u2211":"somme","\u221E":"infini","\u2665":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xA2":"centavo","\u2211":"soma","\xA3":"libra","\u221E":"infinito","\u2665":"amor"},"uk":{"\u0418":"Y","\u0438":"y","\u0419":"Y","\u0439":"y","\u0426":"Ts","\u0446":"ts","\u0425":"Kh","\u0445":"kh","\u0429":"Shch","\u0449":"shch","\u0413":"H","\u0433":"h"},"vi":{"\u0110":"D","\u0111":"d"},"da":{"\xD8":"OE","\xF8":"oe","\xC5":"AA","\xE5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xF8rre end"},"nb":{"&":"og","\xC5":"AA","\xC6":"AE","\xD8":"OE","\xE5":"aa","\xE6":"ae","\xF8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xC5":"AA","\xC4":"AE","\xD6":"OE","\xE5":"aa","\xE4":"ae","\xF6":"oe"}}'
			);
		function a(i, o) {
			if (typeof i != 'string') throw new Error('slugify: string argument expected');
			o = typeof o == 'string' ? { replacement: o } : o || {};
			var d = r[o.locale] || {},
				l = o.replacement === void 0 ? '-' : o.replacement,
				c = o.trim === void 0 ? !0 : o.trim,
				m = i
					.normalize()
					.split('')
					.reduce(function (u, s) {
						var h = d[s];
						return (
							h === void 0 && (h = n[s]),
							h === void 0 && (h = s),
							h === l && (h = ' '),
							u + h.replace(o.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
						);
					}, '');
			return (
				o.strict && (m = m.replace(/[^A-Za-z0-9\s]/g, '')),
				c && (m = m.trim()),
				(m = m.replace(/\s+/g, l)),
				o.lower && (m = m.toLowerCase()),
				m
			);
		}
		return (
			(a.extend = function (i) {
				Object.assign(n, i);
			}),
			a
		);
	});
})(It);
const gt = It.exports,
	fn = 24 * 60 * 60,
	vt = 2 * Math.PI;
function Ne(t) {
	return ((t * vt) / fn) % vt;
}
function P(t, e, n = !1) {
	const r = t / 2,
		a = Math.sin(r) * e,
		i = Math.cos(r) * e;
	return n
		? `${a} ${-i} A ${e} ${e} 0 0 0 ${-a} ${-i}`
		: `${-a} ${-i} A ${e} ${e} 0 0 1 ${a} ${-i}`;
}
let Fe;
const cn = new Uint8Array(16);
function mn() {
	if (
		!Fe &&
		((Fe = typeof crypto < 'u' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)),
		!Fe)
	)
		throw new Error(
			'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
		);
	return Fe(cn);
}
const B = [];
for (let t = 0; t < 256; ++t) B.push((t + 256).toString(16).slice(1));
function hn(t, e = 0) {
	return (
		B[t[e + 0]] +
		B[t[e + 1]] +
		B[t[e + 2]] +
		B[t[e + 3]] +
		'-' +
		B[t[e + 4]] +
		B[t[e + 5]] +
		'-' +
		B[t[e + 6]] +
		B[t[e + 7]] +
		'-' +
		B[t[e + 8]] +
		B[t[e + 9]] +
		'-' +
		B[t[e + 10]] +
		B[t[e + 11]] +
		B[t[e + 12]] +
		B[t[e + 13]] +
		B[t[e + 14]] +
		B[t[e + 15]]
	);
}
const gn = typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
	wt = { randomUUID: gn };
function We(t, e, n) {
	if (wt.randomUUID && !e && !t) return wt.randomUUID();
	t = t || {};
	const r = t.random || (t.rng || mn)();
	if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), e)) {
		n = n || 0;
		for (let a = 0; a < 16; ++a) e[n + a] = r[a];
		return e;
	}
	return hn(r);
}
function vn(t) {
	let e, n, r, a, i, o, d, l, c;
	const m = t[4].default,
		u = Xt(m, t, t[3], null);
	return {
		c() {
			((e = k('g')),
				(n = k('defs')),
				(r = k('path')),
				(i = k('text')),
				(o = k('textPath')),
				u && u.c(),
				(d = k('path')),
				f(r, 'id', t[2]),
				f(r, 'fill', 'transparent'),
				f(r, 'd', (a = `M ${P(t[0], t[1] * 0.96)}`)),
				f(o, 'startOffset', '50%'),
				f(o, 'text-anchor', 'middle'),
				f(o, 'alignment-baseline', 'middle'),
				Pe(o, 'xlink:href', `#${t[2]}`),
				f(d, 'id', t[2]),
				f(d, 'stroke', 'var(--line-color)'),
				f(d, 'stroke-width', '12'),
				f(d, 'fill', 'transparent'),
				f(d, 'd', (l = `M ${P(t[0], t[1] * 0.92)}`)),
				f(e, 'class', 'solar-time svelte-u3gexg'));
		},
		m(s, h) {
			(z(s, e, h), M(e, n), M(n, r), M(e, i), M(i, o), u && u.m(o, null), M(e, d), (c = !0));
		},
		p(s, [h]) {
			((!c || (h & 3 && a !== (a = `M ${P(s[0], s[1] * 0.96)}`))) && f(r, 'd', a),
				u && u.p && (!c || h & 8) && Zt(u, m, s, s[3], c ? Vt(m, s[3], h, null) : Kt(s[3]), null),
				(!c || (h & 3 && l !== (l = `M ${P(s[0], s[1] * 0.92)}`))) && f(d, 'd', l));
		},
		i(s) {
			c || ($(u, s), (c = !0));
		},
		o(s) {
			(Y(u, s), (c = !1));
		},
		d(s) {
			(s && A(e), u && u.d(s));
		}
	};
}
function wn(t, e, n) {
	let { $$slots: r = {}, $$scope: a } = e,
		{ angle: i } = e,
		{ radius: o } = e;
	const d = `solar-time-${We()}`;
	return (
		(t.$$set = (l) => {
			('angle' in l && n(0, (i = l.angle)),
				'radius' in l && n(1, (o = l.radius)),
				'$$scope' in l && n(3, (a = l.$$scope)));
		}),
		[i, o, d, a, r]
	);
}
class _n extends ie {
	constructor(e) {
		(super(), ae(this, e, wn, vn, re, { angle: 0, radius: 1 }));
	}
}
function yn(t) {
	let e, n, r, a, i, o, d, l, c, m, u, s, h, w, y, b, O, N;
	return {
		c() {
			((e = k('g')),
				(n = k('defs')),
				(r = k('path')),
				(i = k('path')),
				(d = k('text')),
				(l = k('textPath')),
				(c = de(t[2])),
				(m = k('path')),
				(s = k('path')),
				(w = k('path')),
				(b = k('text')),
				(O = k('textPath')),
				(N = de(t[3])),
				f(r, 'id', t[5]),
				f(r, 'fill', 'transparent'),
				f(r, 'd', (a = `M ${P(t[0], t[1] * 0.82)}`)),
				f(i, 'id', t[6]),
				f(i, 'fill', 'transparent'),
				f(i, 'd', (o = `M ${P(t[0], t[4])}`)),
				f(l, 'startOffset', '50%'),
				f(l, 'text-anchor', 'middle'),
				f(l, 'alignment-baseline', 'middle'),
				Pe(l, 'xlink:href', `#${t[5]}`),
				f(d, 'class', 'zodiac__symbol svelte-1li1c72'),
				f(m, 'stroke', 'var(--line-color)'),
				f(m, 'stroke-width', '8'),
				f(m, 'fill', 'transparent'),
				f(m, 'd', (u = `M ${P(t[0], t[4])}`)),
				f(s, 'stroke', 'var(--line-color)'),
				f(s, 'stroke-width', '64'),
				f(s, 'stroke-linecap', 'round'),
				f(s, 'fill', 'transparent'),
				f(s, 'd', (h = `M ${P(0.2, t[4])}`)),
				f(w, 'stroke', 'var(--label-bg-color)'),
				f(w, 'stroke-width', '48'),
				f(w, 'stroke-linecap', 'round'),
				f(w, 'fill', 'transparent'),
				f(w, 'd', (y = `M ${P(0.2, t[4])}`)),
				f(O, 'startOffset', '50%'),
				f(O, 'text-anchor', 'middle'),
				f(O, 'alignment-baseline', 'middle'),
				Pe(O, 'xlink:href', `#${t[6]}`),
				f(b, 'class', 'zodiac__sign svelte-1li1c72'),
				f(e, 'class', 'zodiac'));
		},
		m(g, v) {
			(z(g, e, v),
				M(e, n),
				M(n, r),
				M(n, i),
				M(e, d),
				M(d, l),
				M(l, c),
				M(e, m),
				M(e, s),
				M(e, w),
				M(e, b),
				M(b, O),
				M(O, N));
		},
		p(g, [v]) {
			(v & 3 && a !== (a = `M ${P(g[0], g[1] * 0.82)}`) && f(r, 'd', a),
				v & 17 && o !== (o = `M ${P(g[0], g[4])}`) && f(i, 'd', o),
				v & 4 && ye(c, g[2]),
				v & 17 && u !== (u = `M ${P(g[0], g[4])}`) && f(m, 'd', u),
				v & 16 && h !== (h = `M ${P(0.2, g[4])}`) && f(s, 'd', h),
				v & 16 && y !== (y = `M ${P(0.2, g[4])}`) && f(w, 'd', y),
				v & 8 && ye(N, g[3]));
		},
		i: K,
		o: K,
		d(g) {
			g && A(e);
		}
	};
}
function pn(t, e, n) {
	let r,
		{ angle: a } = e,
		{ radius: i } = e,
		{ symbol: o } = e,
		{ sign: d } = e;
	const l = `zodiac-symbol-${We()}`,
		c = `zodiac-sign-${We()}`;
	return (
		(t.$$set = (m) => {
			('angle' in m && n(0, (a = m.angle)),
				'radius' in m && n(1, (i = m.radius)),
				'symbol' in m && n(2, (o = m.symbol)),
				'sign' in m && n(3, (d = m.sign)));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 2 && n(4, (r = i * 0.745));
		}),
		[a, i, o, d, r, l, c]
	);
}
class bn extends ie {
	constructor(e) {
		(super(), ae(this, e, pn, yn, re, { angle: 0, radius: 1, symbol: 2, sign: 3 }));
	}
}
function kn(t) {
	let e, n, r, a, i, o, d, l, c, m, u, s, h, w, y, b, O, N;
	return {
		c() {
			((e = k('g')),
				(n = k('defs')),
				(r = k('path')),
				(i = k('path')),
				(d = k('text')),
				(l = k('textPath')),
				(c = de(t[2])),
				(m = k('path')),
				(s = k('path')),
				(w = k('path')),
				(b = k('text')),
				(O = k('textPath')),
				(N = de(t[3])),
				f(r, 'id', t[5]),
				f(r, 'fill', 'transparent'),
				f(r, 'd', (a = `M ${P(t[0], t[1] * 0.65)}`)),
				f(i, 'id', t[6]),
				f(i, 'fill', 'transparent'),
				f(i, 'd', (o = `M ${P(t[0], t[4])}`)),
				f(l, 'startOffset', '50%'),
				f(l, 'text-anchor', 'middle'),
				f(l, 'alignment-baseline', 'middle'),
				Pe(l, 'xlink:href', `#${t[5]}`),
				f(d, 'class', 'numeral__symbol svelte-w8a0yj'),
				f(m, 'stroke', 'var(--line-color)'),
				f(m, 'stroke-width', '12'),
				f(m, 'fill', 'transparent'),
				f(m, 'd', (u = `M ${P(t[0], t[4])}`)),
				f(s, 'stroke', 'var(--line-color)'),
				f(s, 'stroke-width', '62'),
				f(s, 'stroke-linecap', 'round'),
				f(s, 'fill', 'transparent'),
				f(s, 'd', (h = `M ${P(0, t[4])}`)),
				f(w, 'stroke', 'var(--label-bg-color)'),
				f(w, 'stroke-width', '52'),
				f(w, 'stroke-linecap', 'round'),
				f(w, 'fill', 'transparent'),
				f(w, 'd', (y = `M ${P(0, t[4])}`)),
				f(O, 'startOffset', '50%'),
				f(O, 'text-anchor', 'middle'),
				f(O, 'alignment-baseline', 'middle'),
				Pe(O, 'xlink:href', `#${t[6]}`),
				f(b, 'class', 'numeral__strikes svelte-w8a0yj'),
				f(e, 'class', 'numeral'));
		},
		m(g, v) {
			(z(g, e, v),
				M(e, n),
				M(n, r),
				M(n, i),
				M(e, d),
				M(d, l),
				M(l, c),
				M(e, m),
				M(e, s),
				M(e, w),
				M(e, b),
				M(b, O),
				M(O, N));
		},
		p(g, [v]) {
			(v & 3 && a !== (a = `M ${P(g[0], g[1] * 0.65)}`) && f(r, 'd', a),
				v & 17 && o !== (o = `M ${P(g[0], g[4])}`) && f(i, 'd', o),
				v & 4 && ye(c, g[2]),
				v & 17 && u !== (u = `M ${P(g[0], g[4])}`) && f(m, 'd', u),
				v & 16 && h !== (h = `M ${P(0, g[4])}`) && f(s, 'd', h),
				v & 16 && y !== (y = `M ${P(0, g[4])}`) && f(w, 'd', y),
				v & 8 && ye(N, g[3]));
		},
		i: K,
		o: K,
		d(g) {
			g && A(e);
		}
	};
}
function Mn(t, e, n) {
	let r,
		{ angle: a } = e,
		{ radius: i } = e,
		{ numeral: o } = e,
		{ strikes: d } = e;
	const l = `zodiac-symbol-${We()}`,
		c = `zodiac-sign-${We()}`;
	return (
		(t.$$set = (m) => {
			('angle' in m && n(0, (a = m.angle)),
				'radius' in m && n(1, (i = m.radius)),
				'numeral' in m && n(2, (o = m.numeral)),
				'strikes' in m && n(3, (d = m.strikes)));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 2 && n(4, (r = i * 0.59));
		}),
		[a, i, o, d, r, l, c]
	);
}
class Tn extends ie {
	constructor(e) {
		(super(), ae(this, e, Mn, kn, re, { angle: 0, radius: 1, numeral: 2, strikes: 3 }));
	}
}
function On(t) {
	let e,
		n,
		r = [
			{ stroke: 'var(--line-color)' },
			{ 'stroke-width': '8' },
			{ fill: 'transparent' },
			t[2],
			{ d: (n = `M ${P(t[0], t[1])}`) }
		],
		a = {};
	for (let i = 0; i < r.length; i += 1) a = Xe(a, r[i]);
	return {
		c() {
			((e = k('path')), ct(e, a));
		},
		m(i, o) {
			z(i, e, o);
		},
		p(i, [o]) {
			ct(
				e,
				(a = un(r, [
					{ stroke: 'var(--line-color)' },
					{ 'stroke-width': '8' },
					{ fill: 'transparent' },
					o & 4 && i[2],
					o & 3 && n !== (n = `M ${P(i[0], i[1])}`) && { d: n }
				]))
			);
		},
		i: K,
		o: K,
		d(i) {
			i && A(e);
		}
	};
}
function Sn(t, e, n) {
	let { angle: r } = e,
		{ radius: a } = e;
	return (
		(t.$$set = (i) => {
			(n(2, (e = Xe(Xe({}, e), lt(i)))),
				'angle' in i && n(0, (r = i.angle)),
				'radius' in i && n(1, (a = i.radius)));
		}),
		(e = lt(e)),
		[r, a, e]
	);
}
class at extends ie {
	constructor(e) {
		(super(), ae(this, e, Sn, On, re, { angle: 0, radius: 1 }));
	}
}
function _t(t, e, n) {
	const r = Math.sin(t) * e,
		a = Math.cos(t) * e,
		i = Math.sin(t) * n,
		o = Math.cos(t) * n;
	return `${r} ${-a} L ${i} ${-o}`;
}
function Pn(t) {
	let e, n;
	return {
		c() {
			((e = k('path')),
				f(e, 'stroke', 'var(--line-color)'),
				f(e, 'stroke-width', '8'),
				f(e, 'fill', 'transparent'),
				f(e, 'd', (n = `M ${_t(t[0], t[1], t[2])}`)));
		},
		m(r, a) {
			z(r, e, a);
		},
		p(r, [a]) {
			a & 7 && n !== (n = `M ${_t(r[0], r[1], r[2])}`) && f(e, 'd', n);
		},
		i: K,
		o: K,
		d(r) {
			r && A(e);
		}
	};
}
function Dn(t, e, n) {
	let { angle: r } = e,
		{ radius1: a } = e,
		{ radius2: i } = e;
	return (
		(t.$$set = (o) => {
			('angle' in o && n(0, (r = o.angle)),
				'radius1' in o && n(1, (a = o.radius1)),
				'radius2' in o && n(2, (i = o.radius2)));
		}),
		[r, a, i]
	);
}
class Ae extends ie {
	constructor(e) {
		(super(), ae(this, e, Dn, Pn, re, { angle: 0, radius1: 1, radius2: 2 }));
	}
}
function yt(t, e, n) {
	const r = t.slice();
	return ((r[7] = e[n]), (r[9] = n), r);
}
function pt(t, e) {
	let n, r, a;
	return (
		(r = new Ae({ props: { angle: e[5] + e[6] * e[9], radius1: e[1], radius2: e[2] } })),
		{
			key: t,
			first: null,
			c() {
				((n = _e()), q(r.$$.fragment), (this.first = n));
			},
			m(i, o) {
				(z(i, n, o), F(r, i, o), (a = !0));
			},
			p(i, o) {
				e = i;
				const d = {};
				(o & 104 && (d.angle = e[5] + e[6] * e[9]),
					o & 2 && (d.radius1 = e[1]),
					o & 4 && (d.radius2 = e[2]),
					r.$set(d));
			},
			i(i) {
				a || ($(r.$$.fragment, i), (a = !0));
			},
			o(i) {
				(Y(r.$$.fragment, i), (a = !1));
			},
			d(i) {
				(i && A(n), R(r, i));
			}
		}
	);
}
function Cn(t) {
	let e,
		n,
		r,
		a,
		i,
		o = [],
		d = new Map(),
		l;
	((n = new at({ props: { angle: t[0], radius: t[1] } })),
		(r = new at({ props: { angle: t[0], radius: t[2] } })),
		(a = new Ae({ props: { angle: -t[4], radius1: t[1], radius2: t[2] } })),
		(i = new Ae({ props: { angle: t[4], radius1: t[1], radius2: t[2] } })));
	let c = Array(t[3]);
	const m = (u) => u[9];
	for (let u = 0; u < c.length; u += 1) {
		let s = yt(t, c, u),
			h = m(s);
		d.set(h, (o[u] = pt(h, s)));
	}
	return {
		c() {
			((e = k('g')), q(n.$$.fragment), q(r.$$.fragment), q(a.$$.fragment), q(i.$$.fragment));
			for (let u = 0; u < o.length; u += 1) o[u].c();
			f(e, 'class', 'ticks');
		},
		m(u, s) {
			(z(u, e, s), F(n, e, null), F(r, e, null), F(a, e, null), F(i, e, null));
			for (let h = 0; h < o.length; h += 1) o[h] && o[h].m(e, null);
			l = !0;
		},
		p(u, [s]) {
			const h = {};
			(s & 1 && (h.angle = u[0]), s & 2 && (h.radius = u[1]), n.$set(h));
			const w = {};
			(s & 1 && (w.angle = u[0]), s & 4 && (w.radius = u[2]), r.$set(w));
			const y = {};
			(s & 16 && (y.angle = -u[4]),
				s & 2 && (y.radius1 = u[1]),
				s & 4 && (y.radius2 = u[2]),
				a.$set(y));
			const b = {};
			(s & 16 && (b.angle = u[4]),
				s & 2 && (b.radius1 = u[1]),
				s & 4 && (b.radius2 = u[2]),
				i.$set(b),
				s & 110 &&
					((c = Array(u[3])), Je(), (o = Qe(o, s, m, 1, u, c, d, e, Be, pt, null, yt)), Ge()));
		},
		i(u) {
			if (!l) {
				($(n.$$.fragment, u), $(r.$$.fragment, u), $(a.$$.fragment, u), $(i.$$.fragment, u));
				for (let s = 0; s < c.length; s += 1) $(o[s]);
				l = !0;
			}
		},
		o(u) {
			(Y(n.$$.fragment, u), Y(r.$$.fragment, u), Y(a.$$.fragment, u), Y(i.$$.fragment, u));
			for (let s = 0; s < o.length; s += 1) Y(o[s]);
			l = !1;
		},
		d(u) {
			(u && A(e), R(n), R(r), R(a), R(i));
			for (let s = 0; s < o.length; s += 1) o[s].d();
		}
	};
}
function En(t, e, n) {
	let r,
		a,
		i,
		{ angle: o } = e,
		{ radius1: d } = e,
		{ radius2: l } = e,
		{ amount: c } = e;
	return (
		(t.$$set = (m) => {
			('angle' in m && n(0, (o = m.angle)),
				'radius1' in m && n(1, (d = m.radius1)),
				'radius2' in m && n(2, (l = m.radius2)),
				'amount' in m && n(3, (c = m.amount)));
		}),
		(t.$$.update = () => {
			(t.$$.dirty & 9 && n(6, (r = o / c)),
				t.$$.dirty & 1 && n(4, (a = o / 2)),
				t.$$.dirty & 16 && n(5, (i = -a)));
		}),
		[o, d, l, c, a, i, r]
	);
}
class Ht extends ie {
	constructor(e) {
		(super(), ae(this, e, En, Cn, re, { angle: 0, radius1: 1, radius2: 2, amount: 3 }));
	}
}
function $n(t) {
	let e = t[3].solarTime + '',
		n,
		r;
	return {
		c() {
			((n = de(e)), (r = ot()));
		},
		m(a, i) {
			(z(a, n, i), z(a, r, i));
		},
		p(a, i) {
			i & 8 && e !== (e = a[3].solarTime + '') && ye(n, e);
		},
		d(a) {
			(a && A(n), a && A(r));
		}
	};
}
function Un(t) {
	let e, n, r, a, i, o, d, l, c, m;
	return (
		(n = new Ht({ props: { angle: t[1], radius1: t[0], radius2: t[0] + 50, amount: 10 } })),
		(i = new _n({
			props: { angle: t[1], radius: t[0], $$slots: { default: [$n] }, $$scope: { ctx: t } }
		})),
		(o = new bn({
			props: { angle: t[1], radius: t[0], symbol: t[3].zodiacSymbol, sign: t[3].zodiacSign }
		})),
		(d = new Tn({
			props: { angle: t[1], radius: t[0], numeral: t[3].japaneseNumeral, strikes: t[3].strikes }
		})),
		{
			c() {
				((e = k('g')),
					q(n.$$.fragment),
					(r = k('path')),
					q(i.$$.fragment),
					q(o.$$.fragment),
					q(d.$$.fragment),
					f(r, 'class', 'period__background svelte-tuc3kb'),
					f(r, 'stroke-width', '8'),
					f(r, 'd', (a = `M ${P(t[1], t[0])} L ${P(t[1], t[0] * 0.59, !0)} Z`)),
					f(e, 'class', (l = dt(`period period--${gt(t[3].solarTime)}`) + ' svelte-tuc3kb')),
					f(e, 'style', (c = `transform: rotate(${t[2]}rad);`)));
			},
			m(u, s) {
				(z(u, e, s), F(n, e, null), M(e, r), F(i, e, null), F(o, e, null), F(d, e, null), (m = !0));
			},
			p(u, [s]) {
				const h = {};
				(s & 2 && (h.angle = u[1]),
					s & 1 && (h.radius1 = u[0]),
					s & 1 && (h.radius2 = u[0] + 50),
					n.$set(h),
					(!m || (s & 3 && a !== (a = `M ${P(u[1], u[0])} L ${P(u[1], u[0] * 0.59, !0)} Z`))) &&
						f(r, 'd', a));
				const w = {};
				(s & 2 && (w.angle = u[1]),
					s & 1 && (w.radius = u[0]),
					s & 40 && (w.$$scope = { dirty: s, ctx: u }),
					i.$set(w));
				const y = {};
				(s & 2 && (y.angle = u[1]),
					s & 1 && (y.radius = u[0]),
					s & 8 && (y.symbol = u[3].zodiacSymbol),
					s & 8 && (y.sign = u[3].zodiacSign),
					o.$set(y));
				const b = {};
				(s & 2 && (b.angle = u[1]),
					s & 1 && (b.radius = u[0]),
					s & 8 && (b.numeral = u[3].japaneseNumeral),
					s & 8 && (b.strikes = u[3].strikes),
					d.$set(b),
					(!m ||
						(s & 8 && l !== (l = dt(`period period--${gt(u[3].solarTime)}`) + ' svelte-tuc3kb'))) &&
						f(e, 'class', l),
					(!m || (s & 4 && c !== (c = `transform: rotate(${u[2]}rad);`))) && f(e, 'style', c));
			},
			i(u) {
				m ||
					($(n.$$.fragment, u),
					$(i.$$.fragment, u),
					$(o.$$.fragment, u),
					$(d.$$.fragment, u),
					(m = !0));
			},
			o(u) {
				(Y(n.$$.fragment, u),
					Y(i.$$.fragment, u),
					Y(o.$$.fragment, u),
					Y(d.$$.fragment, u),
					(m = !1));
			},
			d(u) {
				(u && A(e), R(n), R(i), R(o), R(d));
			}
		}
	);
}
function Yn(t, e, n) {
	let r,
		a,
		i,
		{ timedPeriod: o } = e,
		{ radius: d } = e;
	return (
		(t.$$set = (l) => {
			('timedPeriod' in l && n(4, (o = l.timedPeriod)), 'radius' in l && n(0, (d = l.radius)));
		}),
		(t.$$.update = () => {
			(t.$$.dirty & 16 && n(3, (r = o.period)),
				t.$$.dirty & 16 && n(1, (a = Ne(o.duration))),
				t.$$.dirty & 18 && n(2, (i = Ne(o.start) + a / 2 + Math.PI)));
		}),
		[d, a, i, r, o]
	);
}
class jt extends ie {
	constructor(e) {
		(super(), ae(this, e, Yn, Un, re, { timedPeriod: 4, radius: 0 }));
	}
}
function Nn(t) {
	let e, n, r, a, i, o, d, l, c, m, u;
	return (
		(n = new Ht({ props: { angle: t[3], radius1: t[1] + 100, radius2: t[1] + 150, amount: 5 } })),
		(r = new Ae({ props: { angle: -t[4], radius1: t[1] + 100, radius2: t[1] + 200 } })),
		(a = new Ae({ props: { angle: t[4], radius1: t[1] + 100, radius2: t[1] + 200 } })),
		(i = new at({ props: { id: 'time', stroke: 'transparent', angle: t[3], radius: t[1] + 250 } })),
		{
			c() {
				((e = k('g')),
					q(n.$$.fragment),
					q(r.$$.fragment),
					q(a.$$.fragment),
					q(i.$$.fragment),
					(o = k('text')),
					(d = k('textPath')),
					(l = de(t[0])),
					(c = de(':00')),
					f(d, 'startOffset', '50%'),
					f(d, 'text-anchor', 'middle'),
					f(d, 'alignment-baseline', 'middle'),
					Pe(d, 'xlink:href', '#time'),
					Lt(o, 'transform', 'rotate(' + -t[4] + 'rad)'),
					f(o, 'class', 'zodiac__sign'),
					f(e, 'class', 'hour svelte-k4102o'),
					f(e, 'style', (m = `transform: rotate(${t[2]}rad);`)));
			},
			m(s, h) {
				(z(s, e, h),
					F(n, e, null),
					F(r, e, null),
					F(a, e, null),
					F(i, e, null),
					M(e, o),
					M(o, d),
					M(d, l),
					M(d, c),
					(u = !0));
			},
			p(s, [h]) {
				const w = {};
				(h & 2 && (w.radius1 = s[1] + 100), h & 2 && (w.radius2 = s[1] + 150), n.$set(w));
				const y = {};
				(h & 2 && (y.radius1 = s[1] + 100), h & 2 && (y.radius2 = s[1] + 200), r.$set(y));
				const b = {};
				(h & 2 && (b.radius1 = s[1] + 100), h & 2 && (b.radius2 = s[1] + 200), a.$set(b));
				const O = {};
				(h & 2 && (O.radius = s[1] + 250),
					i.$set(O),
					(!u || h & 1) && ye(l, s[0]),
					(!u || (h & 4 && m !== (m = `transform: rotate(${s[2]}rad);`))) && f(e, 'style', m));
			},
			i(s) {
				u ||
					($(n.$$.fragment, s),
					$(r.$$.fragment, s),
					$(a.$$.fragment, s),
					$(i.$$.fragment, s),
					(u = !0));
			},
			o(s) {
				(Y(n.$$.fragment, s),
					Y(r.$$.fragment, s),
					Y(a.$$.fragment, s),
					Y(i.$$.fragment, s),
					(u = !1));
			},
			d(s) {
				(s && A(e), R(n), R(r), R(a), R(i));
			}
		}
	);
}
function Wn(t, e, n) {
	let r,
		{ hour: a } = e,
		{ radius: i } = e;
	const o = Ne(60 * 60),
		d = o / 2;
	return (
		(t.$$set = (l) => {
			('hour' in l && n(0, (a = l.hour)), 'radius' in l && n(1, (i = l.radius)));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 1 && n(2, (r = Ne(a * 60 * 60) + o / 2 + Math.PI));
		}),
		[a, i, r, o, d]
	);
}
class An extends ie {
	constructor(e) {
		(super(), ae(this, e, Wn, Nn, re, { hour: 0, radius: 1 }));
	}
}
function Le(t) {
	return (
		(Le =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
					}
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
					}),
		Le(t)
	);
}
function Z(t) {
	if (t === null || t === !0 || t === !1) return NaN;
	var e = Number(t);
	return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
}
function I(t, e) {
	if (e.length < t)
		throw new TypeError(
			t + ' argument' + (t > 1 ? 's' : '') + ' required, but only ' + e.length + ' present'
		);
}
function X(t) {
	I(1, arguments);
	var e = Object.prototype.toString.call(t);
	return t instanceof Date || (Le(t) === 'object' && e === '[object Date]')
		? new Date(t.getTime())
		: typeof t == 'number' || e === '[object Number]'
			? new Date(t)
			: ((typeof t == 'string' || e === '[object String]') &&
					typeof console < 'u' &&
					(console.warn(
						"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
					),
					console.warn(new Error().stack)),
				new Date(NaN));
}
function bt(t, e) {
	I(2, arguments);
	var n = X(t),
		r = Z(e);
	return isNaN(r) ? new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Ln(t, e) {
	I(2, arguments);
	var n = X(t).getTime(),
		r = Z(e);
	return new Date(n + r);
}
var zn = {};
function Ke() {
	return zn;
}
function In(t) {
	var e = new Date(
		Date.UTC(
			t.getFullYear(),
			t.getMonth(),
			t.getDate(),
			t.getHours(),
			t.getMinutes(),
			t.getSeconds(),
			t.getMilliseconds()
		)
	);
	return (e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime());
}
function Hn(t) {
	return (
		I(1, arguments),
		t instanceof Date ||
			(Le(t) === 'object' && Object.prototype.toString.call(t) === '[object Date]')
	);
}
function jn(t) {
	if ((I(1, arguments), !Hn(t) && typeof t != 'number')) return !1;
	var e = X(t);
	return !isNaN(Number(e));
}
function Fn(t, e) {
	return (I(2, arguments), X(t).getTime() - X(e).getTime());
}
var kt = {
		ceil: Math.ceil,
		round: Math.round,
		floor: Math.floor,
		trunc: function (e) {
			return e < 0 ? Math.ceil(e) : Math.floor(e);
		}
	},
	Rn = 'trunc';
function qn(t) {
	return t ? kt[t] : kt[Rn];
}
function it(t, e, n) {
	I(2, arguments);
	var r = Fn(t, e) / 1e3;
	return qn(n == null ? void 0 : n.roundingMethod)(r);
}
function Jn(t, e) {
	I(2, arguments);
	var n = Z(e);
	return Ln(t, -n);
}
var Gn = 864e5;
function Bn(t) {
	I(1, arguments);
	var e = X(t),
		n = e.getTime();
	(e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
	var r = e.getTime(),
		a = n - r;
	return Math.floor(a / Gn) + 1;
}
function Ve(t) {
	I(1, arguments);
	var e = 1,
		n = X(t),
		r = n.getUTCDay(),
		a = (r < e ? 7 : 0) + r - e;
	return (n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n);
}
function Ft(t) {
	I(1, arguments);
	var e = X(t),
		n = e.getUTCFullYear(),
		r = new Date(0);
	(r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0));
	var a = Ve(r),
		i = new Date(0);
	(i.setUTCFullYear(n, 0, 4), i.setUTCHours(0, 0, 0, 0));
	var o = Ve(i);
	return e.getTime() >= a.getTime() ? n + 1 : e.getTime() >= o.getTime() ? n : n - 1;
}
function Qn(t) {
	I(1, arguments);
	var e = Ft(t),
		n = new Date(0);
	(n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0));
	var r = Ve(n);
	return r;
}
var Xn = 6048e5;
function Vn(t) {
	I(1, arguments);
	var e = X(t),
		n = Ve(e).getTime() - Qn(e).getTime();
	return Math.round(n / Xn) + 1;
}
function Ze(t, e) {
	var n, r, a, i, o, d, l, c;
	I(1, arguments);
	var m = Ke(),
		u = Z(
			(n =
				(r =
					(a =
						(i = e == null ? void 0 : e.weekStartsOn) !== null && i !== void 0
							? i
							: e == null ||
								  (o = e.locale) === null ||
								  o === void 0 ||
								  (d = o.options) === null ||
								  d === void 0
								? void 0
								: d.weekStartsOn) !== null && a !== void 0
						? a
						: m.weekStartsOn) !== null && r !== void 0
					? r
					: (l = m.locale) === null || l === void 0 || (c = l.options) === null || c === void 0
						? void 0
						: c.weekStartsOn) !== null && n !== void 0
				? n
				: 0
		);
	if (!(u >= 0 && u <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
	var s = X(t),
		h = s.getUTCDay(),
		w = (h < u ? 7 : 0) + h - u;
	return (s.setUTCDate(s.getUTCDate() - w), s.setUTCHours(0, 0, 0, 0), s);
}
function Rt(t, e) {
	var n, r, a, i, o, d, l, c;
	I(1, arguments);
	var m = X(t),
		u = m.getUTCFullYear(),
		s = Ke(),
		h = Z(
			(n =
				(r =
					(a =
						(i = e == null ? void 0 : e.firstWeekContainsDate) !== null && i !== void 0
							? i
							: e == null ||
								  (o = e.locale) === null ||
								  o === void 0 ||
								  (d = o.options) === null ||
								  d === void 0
								? void 0
								: d.firstWeekContainsDate) !== null && a !== void 0
						? a
						: s.firstWeekContainsDate) !== null && r !== void 0
					? r
					: (l = s.locale) === null || l === void 0 || (c = l.options) === null || c === void 0
						? void 0
						: c.firstWeekContainsDate) !== null && n !== void 0
				? n
				: 1
		);
	if (!(h >= 1 && h <= 7))
		throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
	var w = new Date(0);
	(w.setUTCFullYear(u + 1, 0, h), w.setUTCHours(0, 0, 0, 0));
	var y = Ze(w, e),
		b = new Date(0);
	(b.setUTCFullYear(u, 0, h), b.setUTCHours(0, 0, 0, 0));
	var O = Ze(b, e);
	return m.getTime() >= y.getTime() ? u + 1 : m.getTime() >= O.getTime() ? u : u - 1;
}
function Zn(t, e) {
	var n, r, a, i, o, d, l, c;
	I(1, arguments);
	var m = Ke(),
		u = Z(
			(n =
				(r =
					(a =
						(i = e == null ? void 0 : e.firstWeekContainsDate) !== null && i !== void 0
							? i
							: e == null ||
								  (o = e.locale) === null ||
								  o === void 0 ||
								  (d = o.options) === null ||
								  d === void 0
								? void 0
								: d.firstWeekContainsDate) !== null && a !== void 0
						? a
						: m.firstWeekContainsDate) !== null && r !== void 0
					? r
					: (l = m.locale) === null || l === void 0 || (c = l.options) === null || c === void 0
						? void 0
						: c.firstWeekContainsDate) !== null && n !== void 0
				? n
				: 1
		),
		s = Rt(t, e),
		h = new Date(0);
	(h.setUTCFullYear(s, 0, u), h.setUTCHours(0, 0, 0, 0));
	var w = Ze(h, e);
	return w;
}
var Kn = 6048e5;
function xn(t, e) {
	I(1, arguments);
	var n = X(t),
		r = Ze(n, e).getTime() - Zn(n, e).getTime();
	return Math.round(r / Kn) + 1;
}
function D(t, e) {
	for (var n = t < 0 ? '-' : '', r = Math.abs(t).toString(); r.length < e; ) r = '0' + r;
	return n + r;
}
var er = {
	y: function (e, n) {
		var r = e.getUTCFullYear(),
			a = r > 0 ? r : 1 - r;
		return D(n === 'yy' ? a % 100 : a, n.length);
	},
	M: function (e, n) {
		var r = e.getUTCMonth();
		return n === 'M' ? String(r + 1) : D(r + 1, 2);
	},
	d: function (e, n) {
		return D(e.getUTCDate(), n.length);
	},
	a: function (e, n) {
		var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
		switch (n) {
			case 'a':
			case 'aa':
				return r.toUpperCase();
			case 'aaa':
				return r;
			case 'aaaaa':
				return r[0];
			case 'aaaa':
			default:
				return r === 'am' ? 'a.m.' : 'p.m.';
		}
	},
	h: function (e, n) {
		return D(e.getUTCHours() % 12 || 12, n.length);
	},
	H: function (e, n) {
		return D(e.getUTCHours(), n.length);
	},
	m: function (e, n) {
		return D(e.getUTCMinutes(), n.length);
	},
	s: function (e, n) {
		return D(e.getUTCSeconds(), n.length);
	},
	S: function (e, n) {
		var r = n.length,
			a = e.getUTCMilliseconds(),
			i = Math.floor(a * Math.pow(10, r - 3));
		return D(i, n.length);
	}
};
const he = er;
var Te = {
		am: 'am',
		pm: 'pm',
		midnight: 'midnight',
		noon: 'noon',
		morning: 'morning',
		afternoon: 'afternoon',
		evening: 'evening',
		night: 'night'
	},
	tr = {
		G: function (e, n, r) {
			var a = e.getUTCFullYear() > 0 ? 1 : 0;
			switch (n) {
				case 'G':
				case 'GG':
				case 'GGG':
					return r.era(a, { width: 'abbreviated' });
				case 'GGGGG':
					return r.era(a, { width: 'narrow' });
				case 'GGGG':
				default:
					return r.era(a, { width: 'wide' });
			}
		},
		y: function (e, n, r) {
			if (n === 'yo') {
				var a = e.getUTCFullYear(),
					i = a > 0 ? a : 1 - a;
				return r.ordinalNumber(i, { unit: 'year' });
			}
			return he.y(e, n);
		},
		Y: function (e, n, r, a) {
			var i = Rt(e, a),
				o = i > 0 ? i : 1 - i;
			if (n === 'YY') {
				var d = o % 100;
				return D(d, 2);
			}
			return n === 'Yo' ? r.ordinalNumber(o, { unit: 'year' }) : D(o, n.length);
		},
		R: function (e, n) {
			var r = Ft(e);
			return D(r, n.length);
		},
		u: function (e, n) {
			var r = e.getUTCFullYear();
			return D(r, n.length);
		},
		Q: function (e, n, r) {
			var a = Math.ceil((e.getUTCMonth() + 1) / 3);
			switch (n) {
				case 'Q':
					return String(a);
				case 'QQ':
					return D(a, 2);
				case 'Qo':
					return r.ordinalNumber(a, { unit: 'quarter' });
				case 'QQQ':
					return r.quarter(a, { width: 'abbreviated', context: 'formatting' });
				case 'QQQQQ':
					return r.quarter(a, { width: 'narrow', context: 'formatting' });
				case 'QQQQ':
				default:
					return r.quarter(a, { width: 'wide', context: 'formatting' });
			}
		},
		q: function (e, n, r) {
			var a = Math.ceil((e.getUTCMonth() + 1) / 3);
			switch (n) {
				case 'q':
					return String(a);
				case 'qq':
					return D(a, 2);
				case 'qo':
					return r.ordinalNumber(a, { unit: 'quarter' });
				case 'qqq':
					return r.quarter(a, { width: 'abbreviated', context: 'standalone' });
				case 'qqqqq':
					return r.quarter(a, { width: 'narrow', context: 'standalone' });
				case 'qqqq':
				default:
					return r.quarter(a, { width: 'wide', context: 'standalone' });
			}
		},
		M: function (e, n, r) {
			var a = e.getUTCMonth();
			switch (n) {
				case 'M':
				case 'MM':
					return he.M(e, n);
				case 'Mo':
					return r.ordinalNumber(a + 1, { unit: 'month' });
				case 'MMM':
					return r.month(a, { width: 'abbreviated', context: 'formatting' });
				case 'MMMMM':
					return r.month(a, { width: 'narrow', context: 'formatting' });
				case 'MMMM':
				default:
					return r.month(a, { width: 'wide', context: 'formatting' });
			}
		},
		L: function (e, n, r) {
			var a = e.getUTCMonth();
			switch (n) {
				case 'L':
					return String(a + 1);
				case 'LL':
					return D(a + 1, 2);
				case 'Lo':
					return r.ordinalNumber(a + 1, { unit: 'month' });
				case 'LLL':
					return r.month(a, { width: 'abbreviated', context: 'standalone' });
				case 'LLLLL':
					return r.month(a, { width: 'narrow', context: 'standalone' });
				case 'LLLL':
				default:
					return r.month(a, { width: 'wide', context: 'standalone' });
			}
		},
		w: function (e, n, r, a) {
			var i = xn(e, a);
			return n === 'wo' ? r.ordinalNumber(i, { unit: 'week' }) : D(i, n.length);
		},
		I: function (e, n, r) {
			var a = Vn(e);
			return n === 'Io' ? r.ordinalNumber(a, { unit: 'week' }) : D(a, n.length);
		},
		d: function (e, n, r) {
			return n === 'do' ? r.ordinalNumber(e.getUTCDate(), { unit: 'date' }) : he.d(e, n);
		},
		D: function (e, n, r) {
			var a = Bn(e);
			return n === 'Do' ? r.ordinalNumber(a, { unit: 'dayOfYear' }) : D(a, n.length);
		},
		E: function (e, n, r) {
			var a = e.getUTCDay();
			switch (n) {
				case 'E':
				case 'EE':
				case 'EEE':
					return r.day(a, { width: 'abbreviated', context: 'formatting' });
				case 'EEEEE':
					return r.day(a, { width: 'narrow', context: 'formatting' });
				case 'EEEEEE':
					return r.day(a, { width: 'short', context: 'formatting' });
				case 'EEEE':
				default:
					return r.day(a, { width: 'wide', context: 'formatting' });
			}
		},
		e: function (e, n, r, a) {
			var i = e.getUTCDay(),
				o = (i - a.weekStartsOn + 8) % 7 || 7;
			switch (n) {
				case 'e':
					return String(o);
				case 'ee':
					return D(o, 2);
				case 'eo':
					return r.ordinalNumber(o, { unit: 'day' });
				case 'eee':
					return r.day(i, { width: 'abbreviated', context: 'formatting' });
				case 'eeeee':
					return r.day(i, { width: 'narrow', context: 'formatting' });
				case 'eeeeee':
					return r.day(i, { width: 'short', context: 'formatting' });
				case 'eeee':
				default:
					return r.day(i, { width: 'wide', context: 'formatting' });
			}
		},
		c: function (e, n, r, a) {
			var i = e.getUTCDay(),
				o = (i - a.weekStartsOn + 8) % 7 || 7;
			switch (n) {
				case 'c':
					return String(o);
				case 'cc':
					return D(o, n.length);
				case 'co':
					return r.ordinalNumber(o, { unit: 'day' });
				case 'ccc':
					return r.day(i, { width: 'abbreviated', context: 'standalone' });
				case 'ccccc':
					return r.day(i, { width: 'narrow', context: 'standalone' });
				case 'cccccc':
					return r.day(i, { width: 'short', context: 'standalone' });
				case 'cccc':
				default:
					return r.day(i, { width: 'wide', context: 'standalone' });
			}
		},
		i: function (e, n, r) {
			var a = e.getUTCDay(),
				i = a === 0 ? 7 : a;
			switch (n) {
				case 'i':
					return String(i);
				case 'ii':
					return D(i, n.length);
				case 'io':
					return r.ordinalNumber(i, { unit: 'day' });
				case 'iii':
					return r.day(a, { width: 'abbreviated', context: 'formatting' });
				case 'iiiii':
					return r.day(a, { width: 'narrow', context: 'formatting' });
				case 'iiiiii':
					return r.day(a, { width: 'short', context: 'formatting' });
				case 'iiii':
				default:
					return r.day(a, { width: 'wide', context: 'formatting' });
			}
		},
		a: function (e, n, r) {
			var a = e.getUTCHours(),
				i = a / 12 >= 1 ? 'pm' : 'am';
			switch (n) {
				case 'a':
				case 'aa':
					return r.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
				case 'aaa':
					return r.dayPeriod(i, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
				case 'aaaaa':
					return r.dayPeriod(i, { width: 'narrow', context: 'formatting' });
				case 'aaaa':
				default:
					return r.dayPeriod(i, { width: 'wide', context: 'formatting' });
			}
		},
		b: function (e, n, r) {
			var a = e.getUTCHours(),
				i;
			switch (
				(a === 12 ? (i = Te.noon) : a === 0 ? (i = Te.midnight) : (i = a / 12 >= 1 ? 'pm' : 'am'),
				n)
			) {
				case 'b':
				case 'bb':
					return r.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
				case 'bbb':
					return r.dayPeriod(i, { width: 'abbreviated', context: 'formatting' }).toLowerCase();
				case 'bbbbb':
					return r.dayPeriod(i, { width: 'narrow', context: 'formatting' });
				case 'bbbb':
				default:
					return r.dayPeriod(i, { width: 'wide', context: 'formatting' });
			}
		},
		B: function (e, n, r) {
			var a = e.getUTCHours(),
				i;
			switch (
				(a >= 17
					? (i = Te.evening)
					: a >= 12
						? (i = Te.afternoon)
						: a >= 4
							? (i = Te.morning)
							: (i = Te.night),
				n)
			) {
				case 'B':
				case 'BB':
				case 'BBB':
					return r.dayPeriod(i, { width: 'abbreviated', context: 'formatting' });
				case 'BBBBB':
					return r.dayPeriod(i, { width: 'narrow', context: 'formatting' });
				case 'BBBB':
				default:
					return r.dayPeriod(i, { width: 'wide', context: 'formatting' });
			}
		},
		h: function (e, n, r) {
			if (n === 'ho') {
				var a = e.getUTCHours() % 12;
				return (a === 0 && (a = 12), r.ordinalNumber(a, { unit: 'hour' }));
			}
			return he.h(e, n);
		},
		H: function (e, n, r) {
			return n === 'Ho' ? r.ordinalNumber(e.getUTCHours(), { unit: 'hour' }) : he.H(e, n);
		},
		K: function (e, n, r) {
			var a = e.getUTCHours() % 12;
			return n === 'Ko' ? r.ordinalNumber(a, { unit: 'hour' }) : D(a, n.length);
		},
		k: function (e, n, r) {
			var a = e.getUTCHours();
			return (
				a === 0 && (a = 24),
				n === 'ko' ? r.ordinalNumber(a, { unit: 'hour' }) : D(a, n.length)
			);
		},
		m: function (e, n, r) {
			return n === 'mo' ? r.ordinalNumber(e.getUTCMinutes(), { unit: 'minute' }) : he.m(e, n);
		},
		s: function (e, n, r) {
			return n === 'so' ? r.ordinalNumber(e.getUTCSeconds(), { unit: 'second' }) : he.s(e, n);
		},
		S: function (e, n) {
			return he.S(e, n);
		},
		X: function (e, n, r, a) {
			var i = a._originalDate || e,
				o = i.getTimezoneOffset();
			if (o === 0) return 'Z';
			switch (n) {
				case 'X':
					return Tt(o);
				case 'XXXX':
				case 'XX':
					return ve(o);
				case 'XXXXX':
				case 'XXX':
				default:
					return ve(o, ':');
			}
		},
		x: function (e, n, r, a) {
			var i = a._originalDate || e,
				o = i.getTimezoneOffset();
			switch (n) {
				case 'x':
					return Tt(o);
				case 'xxxx':
				case 'xx':
					return ve(o);
				case 'xxxxx':
				case 'xxx':
				default:
					return ve(o, ':');
			}
		},
		O: function (e, n, r, a) {
			var i = a._originalDate || e,
				o = i.getTimezoneOffset();
			switch (n) {
				case 'O':
				case 'OO':
				case 'OOO':
					return 'GMT' + Mt(o, ':');
				case 'OOOO':
				default:
					return 'GMT' + ve(o, ':');
			}
		},
		z: function (e, n, r, a) {
			var i = a._originalDate || e,
				o = i.getTimezoneOffset();
			switch (n) {
				case 'z':
				case 'zz':
				case 'zzz':
					return 'GMT' + Mt(o, ':');
				case 'zzzz':
				default:
					return 'GMT' + ve(o, ':');
			}
		},
		t: function (e, n, r, a) {
			var i = a._originalDate || e,
				o = Math.floor(i.getTime() / 1e3);
			return D(o, n.length);
		},
		T: function (e, n, r, a) {
			var i = a._originalDate || e,
				o = i.getTime();
			return D(o, n.length);
		}
	};
function Mt(t, e) {
	var n = t > 0 ? '-' : '+',
		r = Math.abs(t),
		a = Math.floor(r / 60),
		i = r % 60;
	if (i === 0) return n + String(a);
	var o = e || '';
	return n + String(a) + o + D(i, 2);
}
function Tt(t, e) {
	if (t % 60 === 0) {
		var n = t > 0 ? '-' : '+';
		return n + D(Math.abs(t) / 60, 2);
	}
	return ve(t, e);
}
function ve(t, e) {
	var n = e || '',
		r = t > 0 ? '-' : '+',
		a = Math.abs(t),
		i = D(Math.floor(a / 60), 2),
		o = D(a % 60, 2);
	return r + i + n + o;
}
const nr = tr;
var Ot = function (e, n) {
		switch (e) {
			case 'P':
				return n.date({ width: 'short' });
			case 'PP':
				return n.date({ width: 'medium' });
			case 'PPP':
				return n.date({ width: 'long' });
			case 'PPPP':
			default:
				return n.date({ width: 'full' });
		}
	},
	qt = function (e, n) {
		switch (e) {
			case 'p':
				return n.time({ width: 'short' });
			case 'pp':
				return n.time({ width: 'medium' });
			case 'ppp':
				return n.time({ width: 'long' });
			case 'pppp':
			default:
				return n.time({ width: 'full' });
		}
	},
	rr = function (e, n) {
		var r = e.match(/(P+)(p+)?/) || [],
			a = r[1],
			i = r[2];
		if (!i) return Ot(e, n);
		var o;
		switch (a) {
			case 'P':
				o = n.dateTime({ width: 'short' });
				break;
			case 'PP':
				o = n.dateTime({ width: 'medium' });
				break;
			case 'PPP':
				o = n.dateTime({ width: 'long' });
				break;
			case 'PPPP':
			default:
				o = n.dateTime({ width: 'full' });
				break;
		}
		return o.replace('{{date}}', Ot(a, n)).replace('{{time}}', qt(i, n));
	},
	ar = { p: qt, P: rr };
const ir = ar;
var or = ['D', 'DD'],
	sr = ['YY', 'YYYY'];
function ur(t) {
	return or.indexOf(t) !== -1;
}
function lr(t) {
	return sr.indexOf(t) !== -1;
}
function St(t, e, n) {
	if (t === 'YYYY')
		throw new RangeError(
			'Use `yyyy` instead of `YYYY` (in `'
				.concat(e, '`) for formatting years to the input `')
				.concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md')
		);
	if (t === 'YY')
		throw new RangeError(
			'Use `yy` instead of `YY` (in `'
				.concat(e, '`) for formatting years to the input `')
				.concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md')
		);
	if (t === 'D')
		throw new RangeError(
			'Use `d` instead of `D` (in `'
				.concat(e, '`) for formatting days of the month to the input `')
				.concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md')
		);
	if (t === 'DD')
		throw new RangeError(
			'Use `dd` instead of `DD` (in `'
				.concat(e, '`) for formatting days of the month to the input `')
				.concat(n, '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md')
		);
}
var dr = {
		lessThanXSeconds: { one: 'less than a second', other: 'less than {{count}} seconds' },
		xSeconds: { one: '1 second', other: '{{count}} seconds' },
		halfAMinute: 'half a minute',
		lessThanXMinutes: { one: 'less than a minute', other: 'less than {{count}} minutes' },
		xMinutes: { one: '1 minute', other: '{{count}} minutes' },
		aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
		xHours: { one: '1 hour', other: '{{count}} hours' },
		xDays: { one: '1 day', other: '{{count}} days' },
		aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
		xWeeks: { one: '1 week', other: '{{count}} weeks' },
		aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
		xMonths: { one: '1 month', other: '{{count}} months' },
		aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
		xYears: { one: '1 year', other: '{{count}} years' },
		overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
		almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' }
	},
	fr = function (e, n, r) {
		var a,
			i = dr[e];
		return (
			typeof i == 'string'
				? (a = i)
				: n === 1
					? (a = i.one)
					: (a = i.other.replace('{{count}}', n.toString())),
			r != null && r.addSuffix ? (r.comparison && r.comparison > 0 ? 'in ' + a : a + ' ago') : a
		);
	};
const cr = fr;
function tt(t) {
	return function () {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			n = e.width ? String(e.width) : t.defaultWidth,
			r = t.formats[n] || t.formats[t.defaultWidth];
		return r;
	};
}
var mr = { full: 'EEEE, MMMM do, y', long: 'MMMM do, y', medium: 'MMM d, y', short: 'MM/dd/yyyy' },
	hr = { full: 'h:mm:ss a zzzz', long: 'h:mm:ss a z', medium: 'h:mm:ss a', short: 'h:mm a' },
	gr = {
		full: "{{date}} 'at' {{time}}",
		long: "{{date}} 'at' {{time}}",
		medium: '{{date}}, {{time}}',
		short: '{{date}}, {{time}}'
	},
	vr = {
		date: tt({ formats: mr, defaultWidth: 'full' }),
		time: tt({ formats: hr, defaultWidth: 'full' }),
		dateTime: tt({ formats: gr, defaultWidth: 'full' })
	};
const wr = vr;
var _r = {
		lastWeek: "'last' eeee 'at' p",
		yesterday: "'yesterday at' p",
		today: "'today at' p",
		tomorrow: "'tomorrow at' p",
		nextWeek: "eeee 'at' p",
		other: 'P'
	},
	yr = function (e, n, r, a) {
		return _r[e];
	};
const pr = yr;
function Ee(t) {
	return function (e, n) {
		var r = n != null && n.context ? String(n.context) : 'standalone',
			a;
		if (r === 'formatting' && t.formattingValues) {
			var i = t.defaultFormattingWidth || t.defaultWidth,
				o = n != null && n.width ? String(n.width) : i;
			a = t.formattingValues[o] || t.formattingValues[i];
		} else {
			var d = t.defaultWidth,
				l = n != null && n.width ? String(n.width) : t.defaultWidth;
			a = t.values[l] || t.values[d];
		}
		var c = t.argumentCallback ? t.argumentCallback(e) : e;
		return a[c];
	};
}
var br = { narrow: ['B', 'A'], abbreviated: ['BC', 'AD'], wide: ['Before Christ', 'Anno Domini'] },
	kr = {
		narrow: ['1', '2', '3', '4'],
		abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
		wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
	},
	Mr = {
		narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
		abbreviated: [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		],
		wide: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		]
	},
	Tr = {
		narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
		short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	},
	Or = {
		narrow: {
			am: 'a',
			pm: 'p',
			midnight: 'mi',
			noon: 'n',
			morning: 'morning',
			afternoon: 'afternoon',
			evening: 'evening',
			night: 'night'
		},
		abbreviated: {
			am: 'AM',
			pm: 'PM',
			midnight: 'midnight',
			noon: 'noon',
			morning: 'morning',
			afternoon: 'afternoon',
			evening: 'evening',
			night: 'night'
		},
		wide: {
			am: 'a.m.',
			pm: 'p.m.',
			midnight: 'midnight',
			noon: 'noon',
			morning: 'morning',
			afternoon: 'afternoon',
			evening: 'evening',
			night: 'night'
		}
	},
	Sr = {
		narrow: {
			am: 'a',
			pm: 'p',
			midnight: 'mi',
			noon: 'n',
			morning: 'in the morning',
			afternoon: 'in the afternoon',
			evening: 'in the evening',
			night: 'at night'
		},
		abbreviated: {
			am: 'AM',
			pm: 'PM',
			midnight: 'midnight',
			noon: 'noon',
			morning: 'in the morning',
			afternoon: 'in the afternoon',
			evening: 'in the evening',
			night: 'at night'
		},
		wide: {
			am: 'a.m.',
			pm: 'p.m.',
			midnight: 'midnight',
			noon: 'noon',
			morning: 'in the morning',
			afternoon: 'in the afternoon',
			evening: 'in the evening',
			night: 'at night'
		}
	},
	Pr = function (e, n) {
		var r = Number(e),
			a = r % 100;
		if (a > 20 || a < 10)
			switch (a % 10) {
				case 1:
					return r + 'st';
				case 2:
					return r + 'nd';
				case 3:
					return r + 'rd';
			}
		return r + 'th';
	},
	Dr = {
		ordinalNumber: Pr,
		era: Ee({ values: br, defaultWidth: 'wide' }),
		quarter: Ee({
			values: kr,
			defaultWidth: 'wide',
			argumentCallback: function (e) {
				return e - 1;
			}
		}),
		month: Ee({ values: Mr, defaultWidth: 'wide' }),
		day: Ee({ values: Tr, defaultWidth: 'wide' }),
		dayPeriod: Ee({
			values: Or,
			defaultWidth: 'wide',
			formattingValues: Sr,
			defaultFormattingWidth: 'wide'
		})
	};
const Cr = Dr;
function $e(t) {
	return function (e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r = n.width,
			a = (r && t.matchPatterns[r]) || t.matchPatterns[t.defaultMatchWidth],
			i = e.match(a);
		if (!i) return null;
		var o = i[0],
			d = (r && t.parsePatterns[r]) || t.parsePatterns[t.defaultParseWidth],
			l = Array.isArray(d)
				? $r(d, function (u) {
						return u.test(o);
					})
				: Er(d, function (u) {
						return u.test(o);
					}),
			c;
		((c = t.valueCallback ? t.valueCallback(l) : l),
			(c = n.valueCallback ? n.valueCallback(c) : c));
		var m = e.slice(o.length);
		return { value: c, rest: m };
	};
}
function Er(t, e) {
	for (var n in t) if (t.hasOwnProperty(n) && e(t[n])) return n;
}
function $r(t, e) {
	for (var n = 0; n < t.length; n++) if (e(t[n])) return n;
}
function Ur(t) {
	return function (e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			r = e.match(t.matchPattern);
		if (!r) return null;
		var a = r[0],
			i = e.match(t.parsePattern);
		if (!i) return null;
		var o = t.valueCallback ? t.valueCallback(i[0]) : i[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		var d = e.slice(a.length);
		return { value: o, rest: d };
	};
}
var Yr = /^(\d+)(th|st|nd|rd)?/i,
	Nr = /\d+/i,
	Wr = {
		narrow: /^(b|a)/i,
		abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
		wide: /^(before christ|before common era|anno domini|common era)/i
	},
	Ar = { any: [/^b/i, /^(a|c)/i] },
	Lr = { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
	zr = { any: [/1/i, /2/i, /3/i, /4/i] },
	Ir = {
		narrow: /^[jfmasond]/i,
		abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
		wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
	},
	Hr = {
		narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
		any: [
			/^ja/i,
			/^f/i,
			/^mar/i,
			/^ap/i,
			/^may/i,
			/^jun/i,
			/^jul/i,
			/^au/i,
			/^s/i,
			/^o/i,
			/^n/i,
			/^d/i
		]
	},
	jr = {
		narrow: /^[smtwf]/i,
		short: /^(su|mo|tu|we|th|fr|sa)/i,
		abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
		wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
	},
	Fr = {
		narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
		any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
	},
	Rr = {
		narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
		any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
	},
	qr = {
		any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		}
	},
	Jr = {
		ordinalNumber: Ur({
			matchPattern: Yr,
			parsePattern: Nr,
			valueCallback: function (e) {
				return parseInt(e, 10);
			}
		}),
		era: $e({
			matchPatterns: Wr,
			defaultMatchWidth: 'wide',
			parsePatterns: Ar,
			defaultParseWidth: 'any'
		}),
		quarter: $e({
			matchPatterns: Lr,
			defaultMatchWidth: 'wide',
			parsePatterns: zr,
			defaultParseWidth: 'any',
			valueCallback: function (e) {
				return e + 1;
			}
		}),
		month: $e({
			matchPatterns: Ir,
			defaultMatchWidth: 'wide',
			parsePatterns: Hr,
			defaultParseWidth: 'any'
		}),
		day: $e({
			matchPatterns: jr,
			defaultMatchWidth: 'wide',
			parsePatterns: Fr,
			defaultParseWidth: 'any'
		}),
		dayPeriod: $e({
			matchPatterns: Rr,
			defaultMatchWidth: 'any',
			parsePatterns: qr,
			defaultParseWidth: 'any'
		})
	};
const Gr = Jr;
var Br = {
	code: 'en-US',
	formatDistance: cr,
	formatLong: wr,
	formatRelative: pr,
	localize: Cr,
	match: Gr,
	options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
};
const Qr = Br;
var Xr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
	Vr = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
	Zr = /^'([^]*?)'?$/,
	Kr = /''/g,
	xr = /[a-zA-Z]/;
function Pt(t, e, n) {
	var r, a, i, o, d, l, c, m, u, s, h, w, y, b, O, N, g, v;
	I(2, arguments);
	var S = String(e),
		ee = Ke(),
		C =
			(r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : ee.locale) !== null &&
			r !== void 0
				? r
				: Qr,
		J = Z(
			(i =
				(o =
					(d =
						(l = n == null ? void 0 : n.firstWeekContainsDate) !== null && l !== void 0
							? l
							: n == null ||
								  (c = n.locale) === null ||
								  c === void 0 ||
								  (m = c.options) === null ||
								  m === void 0
								? void 0
								: m.firstWeekContainsDate) !== null && d !== void 0
						? d
						: ee.firstWeekContainsDate) !== null && o !== void 0
					? o
					: (u = ee.locale) === null || u === void 0 || (s = u.options) === null || s === void 0
						? void 0
						: s.firstWeekContainsDate) !== null && i !== void 0
				? i
				: 1
		);
	if (!(J >= 1 && J <= 7))
		throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
	var G = Z(
		(h =
			(w =
				(y =
					(b = n == null ? void 0 : n.weekStartsOn) !== null && b !== void 0
						? b
						: n == null ||
							  (O = n.locale) === null ||
							  O === void 0 ||
							  (N = O.options) === null ||
							  N === void 0
							? void 0
							: N.weekStartsOn) !== null && y !== void 0
					? y
					: ee.weekStartsOn) !== null && w !== void 0
				? w
				: (g = ee.locale) === null || g === void 0 || (v = g.options) === null || v === void 0
					? void 0
					: v.weekStartsOn) !== null && h !== void 0
			? h
			: 0
	);
	if (!(G >= 0 && G <= 6)) throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
	if (!C.localize) throw new RangeError('locale must contain localize property');
	if (!C.formatLong) throw new RangeError('locale must contain formatLong property');
	var L = X(t);
	if (!jn(L)) throw new RangeError('Invalid time value');
	var Ce = In(L),
		ze = Jn(L, Ce),
		xe = { firstWeekContainsDate: J, weekStartsOn: G, locale: C, _originalDate: L },
		Ie = S.match(Vr)
			.map(function (Q) {
				var oe = Q[0];
				if (oe === 'p' || oe === 'P') {
					var pe = ir[oe];
					return pe(Q, C.formatLong);
				}
				return Q;
			})
			.join('')
			.match(Xr)
			.map(function (Q) {
				if (Q === "''") return "'";
				var oe = Q[0];
				if (oe === "'") return ea(Q);
				var pe = nr[oe];
				if (pe)
					return (
						!(n != null && n.useAdditionalWeekYearTokens) && lr(Q) && St(Q, e, String(t)),
						!(n != null && n.useAdditionalDayOfYearTokens) && ur(Q) && St(Q, e, String(t)),
						pe(ze, Q, C.localize, xe)
					);
				if (oe.match(xr))
					throw new RangeError(
						'Format string contains an unescaped latin alphabet character `' + oe + '`'
					);
				return Q;
			})
			.join('');
	return Ie;
}
function ea(t) {
	var e = t.match(Zr);
	return e ? e[1].replace(Kr, "'") : t;
}
function ta(t) {
	I(1, arguments);
	var e = X(t),
		n = e.getFullYear(),
		r = e.getMonth(),
		a = new Date(0);
	return (a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate());
}
function na(t, e) {
	I(2, arguments);
	var n = X(t),
		r = Z(e),
		a = n.getFullYear(),
		i = n.getDate(),
		o = new Date(0);
	(o.setFullYear(a, r, 15), o.setHours(0, 0, 0, 0));
	var d = ta(o);
	return (n.setMonth(r, Math.min(i, d)), n);
}
function ra(t, e) {
	if ((I(2, arguments), Le(e) !== 'object' || e === null))
		throw new RangeError('values parameter must be an object');
	var n = X(t);
	return isNaN(n.getTime())
		? new Date(NaN)
		: (e.year != null && n.setFullYear(e.year),
			e.month != null && (n = na(n, e.month)),
			e.date != null && n.setDate(Z(e.date)),
			e.hours != null && n.setHours(Z(e.hours)),
			e.minutes != null && n.setMinutes(Z(e.minutes)),
			e.seconds != null && n.setSeconds(Z(e.seconds)),
			e.milliseconds != null && n.setMilliseconds(Z(e.milliseconds)),
			n);
}
function Jt(t) {
	return ra(t, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
}
function aa(t) {
	return Ne(it(t, Jt(t)));
}
function ia(t) {
	let e,
		n,
		r,
		a,
		i,
		o,
		d,
		l,
		c,
		m,
		u,
		s = Pt(t[0], 'HH:mm:ss') + '',
		h;
	return {
		c() {
			((e = k('g')),
				(n = k('line')),
				(r = k('circle')),
				(a = k('circle')),
				(i = k('path')),
				(d = k('path')),
				(l = k('path')),
				(m = ot()),
				(u = k('text')),
				(h = de(s)),
				f(n, 'stroke', 'var(--hand-color)'),
				f(n, 'stroke-width', '75'),
				f(n, 'x1', '0'),
				f(n, 'x2', '0'),
				f(n, 'y1', '0'),
				f(n, 'y2', '-500'),
				f(r, 'fill', 'var(--hand-color)'),
				f(r, 'r', '300'),
				f(a, 'fill', 'var(--page-bg-color)'),
				f(a, 'r', '250'),
				f(i, 'fill', 'var(--hand-color)'),
				f(
					i,
					'd',
					(o =
						'M 0 -' +
						(t[1] + 125) +
						' L 50 -' +
						(t[1] + 75) +
						' L 0 -' +
						(t[1] + 25) +
						' L -50 -' +
						(t[1] + 75) +
						' Z')
				),
				f(d, 'fill', 'var(--hand-color)'),
				f(d, 'd', 'M 0 -650 L 100 -400 L 0 -500 L -100 -400 Z'),
				f(l, 'fill', 'var(--hand-color)'),
				f(l, 'd', 'M 0 -1480 L 50 -1575 L 0 -1550 L -50 -1575 Z'),
				f(e, 'class', 'hand'),
				f(e, 'style', (c = `transform: rotate(${t[2]}rad);`)),
				f(u, 'class', 'hand__time svelte-957pui'),
				f(u, 'text-anchor', 'middle'),
				f(u, 'alignment-baseline', 'middle'));
		},
		m(w, y) {
			(z(w, e, y),
				M(e, n),
				M(e, r),
				M(e, a),
				M(e, i),
				M(e, d),
				M(e, l),
				z(w, m, y),
				z(w, u, y),
				M(u, h));
		},
		p(w, [y]) {
			(y & 2 &&
				o !==
					(o =
						'M 0 -' +
						(w[1] + 125) +
						' L 50 -' +
						(w[1] + 75) +
						' L 0 -' +
						(w[1] + 25) +
						' L -50 -' +
						(w[1] + 75) +
						' Z') &&
				f(i, 'd', o),
				y & 4 && c !== (c = `transform: rotate(${w[2]}rad);`) && f(e, 'style', c),
				y & 1 && s !== (s = Pt(w[0], 'HH:mm:ss') + '') && ye(h, s));
		},
		i: K,
		o: K,
		d(w) {
			(w && A(e), w && A(m), w && A(u));
		}
	};
}
function oa(t, e, n) {
	let r,
		{ time: a } = e,
		{ radius: i } = e;
	return (
		(t.$$set = (o) => {
			('time' in o && n(0, (a = o.time)), 'radius' in o && n(1, (i = o.radius)));
		}),
		(t.$$.update = () => {
			t.$$.dirty & 1 && n(2, (r = aa(a) + Math.PI));
		}),
		[a, i, r]
	);
}
class sa extends ie {
	constructor(e) {
		(super(), ae(this, e, oa, ia, re, { time: 0, radius: 1 }));
	}
}
var Gt = { exports: {} };
(function (t, e) {
	(function () {
		var n = Math.PI,
			r = Math.sin,
			a = Math.cos,
			i = Math.tan,
			o = Math.asin,
			d = Math.atan2,
			l = Math.acos,
			c = n / 180,
			m = 1e3 * 60 * 60 * 24,
			u = 2440588,
			s = 2451545;
		function h(_) {
			return _.valueOf() / m - 0.5 + u;
		}
		function w(_) {
			return new Date((_ + 0.5 - u) * m);
		}
		function y(_) {
			return h(_) - s;
		}
		var b = c * 23.4397;
		function O(_, p) {
			return d(r(_) * a(b) - i(p) * r(b), a(_));
		}
		function N(_, p) {
			return o(r(p) * a(b) + a(p) * r(b) * r(_));
		}
		function g(_, p, T) {
			return d(r(_), a(_) * r(p) - i(T) * a(p));
		}
		function v(_, p, T) {
			return o(r(p) * r(T) + a(p) * a(T) * a(_));
		}
		function S(_, p) {
			return c * (280.16 + 360.9856235 * _) - p;
		}
		function ee(_) {
			return (_ < 0 && (_ = 0), 2967e-7 / Math.tan(_ + 0.00312536 / (_ + 0.08901179)));
		}
		function C(_) {
			return c * (357.5291 + 0.98560028 * _);
		}
		function J(_) {
			var p = c * (1.9148 * r(_) + 0.02 * r(2 * _) + 3e-4 * r(3 * _)),
				T = c * 102.9372;
			return _ + p + T + n;
		}
		function G(_) {
			var p = C(_),
				T = J(p);
			return { dec: N(T, 0), ra: O(T, 0) };
		}
		var L = {};
		L.getPosition = function (_, p, T) {
			var W = c * -T,
				E = c * p,
				H = y(_),
				U = G(H),
				j = S(H, W) - U.ra;
			return { azimuth: g(j, E, U.dec), altitude: v(j, E, U.dec) };
		};
		var Ce = (L.times = [
			[-0.833, 'sunrise', 'sunset'],
			[-0.3, 'sunriseEnd', 'sunsetStart'],
			[-6, 'dawn', 'dusk'],
			[-12, 'nauticalDawn', 'nauticalDusk'],
			[-18, 'nightEnd', 'night'],
			[6, 'goldenHourEnd', 'goldenHour']
		]);
		L.addTime = function (_, p, T) {
			Ce.push([_, p, T]);
		};
		var ze = 9e-4;
		function xe(_, p) {
			return Math.round(_ - ze - p / (2 * n));
		}
		function Ie(_, p, T) {
			return ze + (_ + p) / (2 * n) + T;
		}
		function Q(_, p, T) {
			return s + _ + 0.0053 * r(p) - 0.0069 * r(2 * T);
		}
		function oe(_, p, T) {
			return l((r(_) - r(p) * r(T)) / (a(p) * a(T)));
		}
		function pe(_) {
			return (-2.076 * Math.sqrt(_)) / 60;
		}
		function Bt(_, p, T, W, E, H, U) {
			var j = oe(_, T, W),
				V = Ie(j, p, E);
			return Q(V, H, U);
		}
		L.getTimes = function (_, p, T, W) {
			W = W || 0;
			var E = c * -T,
				H = c * p,
				U = pe(W),
				j = y(_),
				V = xe(j, E),
				te = Ie(0, E, V),
				se = C(te),
				fe = J(se),
				ge = N(fe, 0),
				ue = Q(te, se, fe),
				ce,
				be,
				le,
				ne,
				me,
				ke,
				x = { solarNoon: w(ue), nadir: w(ue - 0.5) };
			for (ce = 0, be = Ce.length; ce < be; ce += 1)
				((le = Ce[ce]),
					(ne = (le[0] + U) * c),
					(me = Bt(ne, E, H, ge, V, se, fe)),
					(ke = ue - (me - ue)),
					(x[le[1]] = w(ke)),
					(x[le[2]] = w(me)));
			return x;
		};
		function st(_) {
			var p = c * (218.316 + 13.176396 * _),
				T = c * (134.963 + 13.064993 * _),
				W = c * (93.272 + 13.22935 * _),
				E = p + c * 6.289 * r(T),
				H = c * 5.128 * r(W),
				U = 385001 - 20905 * a(T);
			return { ra: O(E, H), dec: N(E, H), dist: U };
		}
		((L.getMoonPosition = function (_, p, T) {
			var W = c * -T,
				E = c * p,
				H = y(_),
				U = st(H),
				j = S(H, W) - U.ra,
				V = v(j, E, U.dec),
				te = d(r(j), i(E) * a(U.dec) - r(U.dec) * a(j));
			return (
				(V = V + ee(V)),
				{ azimuth: g(j, E, U.dec), altitude: V, distance: U.dist, parallacticAngle: te }
			);
		}),
			(L.getMoonIllumination = function (_) {
				var p = y(_ || new Date()),
					T = G(p),
					W = st(p),
					E = 149598e3,
					H = l(r(T.dec) * r(W.dec) + a(T.dec) * a(W.dec) * a(T.ra - W.ra)),
					U = d(E * r(H), W.dist - E * a(H)),
					j = d(
						a(T.dec) * r(T.ra - W.ra),
						r(T.dec) * a(W.dec) - a(T.dec) * r(W.dec) * a(T.ra - W.ra)
					);
				return {
					fraction: (1 + a(U)) / 2,
					phase: 0.5 + (0.5 * U * (j < 0 ? -1 : 1)) / Math.PI,
					angle: j
				};
			}));
		function He(_, p) {
			return new Date(_.valueOf() + (p * m) / 24);
		}
		((L.getMoonTimes = function (_, p, T, W) {
			var E = new Date(_);
			W ? E.setUTCHours(0, 0, 0, 0) : E.setHours(0, 0, 0, 0);
			for (
				var H = 0.133 * c,
					U = L.getMoonPosition(E, p, T).altitude - H,
					j,
					V,
					te,
					se,
					fe,
					ge,
					ue,
					ce,
					be,
					le,
					ne,
					me,
					ke,
					x = 1;
				x <= 24 &&
				((j = L.getMoonPosition(He(E, x), p, T).altitude - H),
				(V = L.getMoonPosition(He(E, x + 1), p, T).altitude - H),
				(fe = (U + V) / 2 - j),
				(ge = (V - U) / 2),
				(ue = -ge / (2 * fe)),
				(ce = (fe * ue + ge) * ue + j),
				(be = ge * ge - 4 * fe * j),
				(le = 0),
				be >= 0 &&
					((ke = Math.sqrt(be) / (Math.abs(fe) * 2)),
					(ne = ue - ke),
					(me = ue + ke),
					Math.abs(ne) <= 1 && le++,
					Math.abs(me) <= 1 && le++,
					ne < -1 && (ne = me)),
				le === 1
					? U < 0
						? (te = x + ne)
						: (se = x + ne)
					: le === 2 && ((te = x + (ce < 0 ? me : ne)), (se = x + (ce < 0 ? ne : me))),
				!(te && se));
				x += 2
			)
				U = V;
			var je = {};
			return (
				te && (je.rise = He(E, te)),
				se && (je.set = He(E, se)),
				!te && !se && (je[ce > 0 ? 'alwaysUp' : 'alwaysDown'] = !0),
				je
			);
		}),
			(t.exports = L));
	})();
})(Gt);
const ua = Gt.exports;
function Re(t, e, n) {
	const r = it(n, e) / 6,
		a = Jt(e),
		i = it(e, a);
	return t.map((o, d) => ({ start: i + r * d, duration: r, period: o }));
}
function Dt(t, e, n) {
	const r = t.slice();
	return ((r[9] = e[n]), (r[11] = n), r);
}
function Ct(t, e, n) {
	const r = t.slice();
	return ((r[12] = e[n]), r);
}
function Et(t, e, n) {
	const r = t.slice();
	return ((r[12] = e[n]), r);
}
function $t(t, e) {
	let n, r, a;
	return (
		(r = new jt({ props: { timedPeriod: e[12], radius: e[1] } })),
		{
			key: t,
			first: null,
			c() {
				((n = _e()), q(r.$$.fragment), (this.first = n));
			},
			m(i, o) {
				(z(i, n, o), F(r, i, o), (a = !0));
			},
			p(i, o) {
				e = i;
				const d = {};
				(o & 12 && (d.timedPeriod = e[12]), r.$set(d));
			},
			i(i) {
				a || ($(r.$$.fragment, i), (a = !0));
			},
			o(i) {
				(Y(r.$$.fragment, i), (a = !1));
			},
			d(i) {
				(i && A(n), R(r, i));
			}
		}
	);
}
function Ut(t, e) {
	let n, r, a;
	return (
		(r = new jt({ props: { timedPeriod: e[12], radius: e[1] } })),
		{
			key: t,
			first: null,
			c() {
				((n = _e()), q(r.$$.fragment), (this.first = n));
			},
			m(i, o) {
				(z(i, n, o), F(r, i, o), (a = !0));
			},
			p(i, o) {
				e = i;
				const d = {};
				(o & 12 && (d.timedPeriod = e[12]), r.$set(d));
			},
			i(i) {
				a || ($(r.$$.fragment, i), (a = !0));
			},
			o(i) {
				(Y(r.$$.fragment, i), (a = !1));
			},
			d(i) {
				(i && A(n), R(r, i));
			}
		}
	);
}
function Yt(t, e) {
	let n, r, a;
	return (
		(r = new An({ props: { hour: e[11], radius: e[1] } })),
		{
			key: t,
			first: null,
			c() {
				((n = _e()), q(r.$$.fragment), (this.first = n));
			},
			m(i, o) {
				(z(i, n, o), F(r, i, o), (a = !0));
			},
			p(i, o) {
				e = i;
			},
			i(i) {
				a || ($(r.$$.fragment, i), (a = !0));
			},
			o(i) {
				(Y(r.$$.fragment, i), (a = !1));
			},
			d(i) {
				(i && A(n), R(r, i));
			}
		}
	);
}
function la(t) {
	let e,
		n = [],
		r = new Map(),
		a,
		i = [],
		o = new Map(),
		d,
		l = [],
		c = new Map(),
		m,
		u,
		s,
		h = Re(t[5], t[3], t[2]);
	const w = (g) => g[12].period.zodiacSign;
	for (let g = 0; g < h.length; g += 1) {
		let v = Et(t, h, g),
			S = w(v);
		r.set(S, (n[g] = $t(S, v)));
	}
	let y = Re(t[4], t[2], bt(t[3], 1));
	const b = (g) => g[12].period.zodiacSign;
	for (let g = 0; g < y.length; g += 1) {
		let v = Ct(t, y, g),
			S = b(v);
		o.set(S, (i[g] = Ut(S, v)));
	}
	let O = Array(24);
	const N = (g) => g[11];
	for (let g = 0; g < O.length; g += 1) {
		let v = Dt(t, O, g),
			S = N(v);
		c.set(S, (l[g] = Yt(S, v)));
	}
	return (
		(u = new sa({ props: { time: t[0], radius: t[1] } })),
		{
			c() {
				e = k('svg');
				for (let g = 0; g < n.length; g += 1) n[g].c();
				a = _e();
				for (let g = 0; g < i.length; g += 1) i[g].c();
				d = _e();
				for (let g = 0; g < l.length; g += 1) l[g].c();
				((m = _e()),
					q(u.$$.fragment),
					Lt(e, '--radius', t[1]),
					f(e, 'class', 'wadokei svelte-1hly9kz'),
					f(e, 'width', '800'),
					f(e, 'height', '800'),
					f(e, 'viewBox', '-1510 -1510 3020 3020'));
			},
			m(g, v) {
				z(g, e, v);
				for (let S = 0; S < n.length; S += 1) n[S] && n[S].m(e, null);
				M(e, a);
				for (let S = 0; S < i.length; S += 1) i[S] && i[S].m(e, null);
				M(e, d);
				for (let S = 0; S < l.length; S += 1) l[S] && l[S].m(e, null);
				(M(e, m), F(u, e, null), (s = !0));
			},
			p(g, [v]) {
				(v & 46 &&
					((h = Re(g[5], g[3], g[2])), Je(), (n = Qe(n, v, w, 1, g, h, r, e, Be, $t, a, Et)), Ge()),
					v & 30 &&
						((y = Re(g[4], g[2], bt(g[3], 1))),
						Je(),
						(i = Qe(i, v, b, 1, g, y, o, e, Be, Ut, d, Ct)),
						Ge()),
					v & 2 && ((O = Array(24)), Je(), (l = Qe(l, v, N, 1, g, O, c, e, Be, Yt, m, Dt)), Ge()));
				const S = {};
				(v & 1 && (S.time = g[0]), u.$set(S));
			},
			i(g) {
				if (!s) {
					for (let v = 0; v < h.length; v += 1) $(n[v]);
					for (let v = 0; v < y.length; v += 1) $(i[v]);
					for (let v = 0; v < O.length; v += 1) $(l[v]);
					($(u.$$.fragment, g), (s = !0));
				}
			},
			o(g) {
				for (let v = 0; v < n.length; v += 1) Y(n[v]);
				for (let v = 0; v < i.length; v += 1) Y(i[v]);
				for (let v = 0; v < l.length; v += 1) Y(l[v]);
				(Y(u.$$.fragment, g), (s = !1));
			},
			d(g) {
				g && A(e);
				for (let v = 0; v < n.length; v += 1) n[v].d();
				for (let v = 0; v < i.length; v += 1) i[v].d();
				for (let v = 0; v < l.length; v += 1) l[v].d();
				R(u);
			}
		}
	);
}
function da(t, e, n) {
	let r,
		a,
		i,
		{ time: o } = e,
		{ latitude: d } = e,
		{ longitude: l } = e;
	const c = 1200,
		m = [
			{
				zodiacSign: 'Rooster',
				zodiacSymbol: '\u9149',
				japaneseNumeral: '\u516D',
				strikes: '6',
				solarTime: 'sunset'
			},
			{
				zodiacSign: 'Dog',
				zodiacSymbol: '\u620C',
				japaneseNumeral: '\u4E94',
				strikes: '5',
				solarTime: 'evening'
			},
			{
				zodiacSign: 'Pig',
				zodiacSymbol: '\u4EA5',
				japaneseNumeral: '\u56DB',
				strikes: '4',
				solarTime: 'evening'
			},
			{
				zodiacSign: 'Rat',
				zodiacSymbol: '\u5B50',
				japaneseNumeral: '\u4E5D',
				strikes: '9',
				solarTime: 'midnight'
			},
			{
				zodiacSign: 'Ox',
				zodiacSymbol: '\u4E11',
				japaneseNumeral: '\u516B',
				strikes: '8',
				solarTime: 'before dawn'
			},
			{
				zodiacSign: 'Tiger',
				zodiacSymbol: '\u5BC5',
				japaneseNumeral: '\u4E03',
				strikes: '7',
				solarTime: 'before dawn'
			}
		],
		u = [
			{
				zodiacSign: 'Rabbit',
				zodiacSymbol: '\u536F',
				japaneseNumeral: '\u516D',
				strikes: '6',
				solarTime: 'sunrise'
			},
			{
				zodiacSign: 'Dragon',
				zodiacSymbol: '\u8FB0',
				japaneseNumeral: '\u4E94',
				strikes: '5',
				solarTime: 'morning'
			},
			{
				zodiacSign: 'Snake',
				zodiacSymbol: '\u5DF3',
				japaneseNumeral: '\u56DB',
				strikes: '4',
				solarTime: 'morning'
			},
			{
				zodiacSign: 'Horse',
				zodiacSymbol: '\u5348',
				japaneseNumeral: '\u4E5D',
				strikes: '9',
				solarTime: 'noon'
			},
			{
				zodiacSign: 'Goat',
				zodiacSymbol: '\u672A',
				japaneseNumeral: '\u516B',
				strikes: '8',
				solarTime: 'afternoon'
			},
			{
				zodiacSign: 'Monkey',
				zodiacSymbol: '\u7533',
				japaneseNumeral: '\u4E03',
				strikes: '7',
				solarTime: 'afternoon'
			}
		];
	return (
		(t.$$set = (s) => {
			('time' in s && n(0, (o = s.time)),
				'latitude' in s && n(6, (d = s.latitude)),
				'longitude' in s && n(7, (l = s.longitude)));
		}),
		(t.$$.update = () => {
			(t.$$.dirty & 193 && n(8, (r = ua.getTimes(o, d, l))),
				t.$$.dirty & 256 && n(3, (a = r.sunrise)),
				t.$$.dirty & 256 && n(2, (i = r.sunset)));
		}),
		[o, c, i, a, m, u, d, l, r]
	);
}
class fa extends ie {
	constructor(e) {
		(super(), ae(this, e, da, la, re, { time: 0, latitude: 6, longitude: 7, radius: 1 }));
	}
	get radius() {
		return this.$$.ctx[1];
	}
}
function ca(t) {
	let e, n, r, a, i, o, d;
	return (
		(n = new fa({ props: { time: t[0], latitude: t[2], longitude: t[1] } })),
		{
			c() {
				((e = ft('main')),
					q(n.$$.fragment),
					(r = ot()),
					(a = ft('button')),
					(a.textContent = 'set location'));
			},
			m(l, c) {
				(z(l, e, c),
					F(n, e, null),
					z(l, r, c),
					z(l, a, c),
					(i = !0),
					o || ((d = xt(a, 'click', t[3])), (o = !0)));
			},
			p(l, [c]) {
				const m = {};
				(c & 1 && (m.time = l[0]),
					c & 4 && (m.latitude = l[2]),
					c & 2 && (m.longitude = l[1]),
					n.$set(m));
			},
			i(l) {
				i || ($(n.$$.fragment, l), (i = !0));
			},
			o(l) {
				(Y(n.$$.fragment, l), (i = !1));
			},
			d(l) {
				(l && A(e), R(n), l && A(r), l && A(a), (o = !1), d());
			}
		}
	);
}
function ma(t, e, n) {
	let r = new Date(),
		a = 8.868428487177423,
		i = 51.93410472914457;
	nn(() => {
		const d = setInterval(() => {
			n(0, (r = new Date()));
		}, 1e3);
		return () => clearInterval(d);
	});
	function o() {
		navigator.geolocation.getCurrentPosition((d) => {
			(n(2, (i = d.coords.latitude)), n(1, (a = d.coords.longitude)));
		});
	}
	return [r, a, i, o];
}
class ha extends ie {
	constructor(e) {
		(super(), ae(this, e, ma, ca, re, {}));
	}
}
new ha({ target: document.getElementById('app') });
