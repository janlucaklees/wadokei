var e = Object.create,
	t = Object.defineProperty,
	n = Object.getOwnPropertyDescriptor,
	r = Object.getOwnPropertyNames,
	i = Object.getPrototypeOf,
	a = Object.prototype.hasOwnProperty,
	o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports),
	s = (e, i, o, s) => {
		if ((i && typeof i == `object`) || typeof i == `function`)
			for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
				((d = c[l]),
					!a.call(e, d) &&
						d !== o &&
						t(e, d, {
							get: ((e) => i[e]).bind(null, d),
							enumerable: !(s = n(i, d)) || s.enumerable
						}));
		return e;
	},
	c = (n, r, a) => (
		(a = n == null ? {} : e(i(n))),
		s(r || !n || !n.__esModule ? t(a, `default`, { value: n, enumerable: !0 }) : a, n)
	);
((function () {
	let e = document.createElement(`link`).relList;
	if (e && e.supports && e.supports(`modulepreload`)) return;
	for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
	new MutationObserver((e) => {
		for (let t of e)
			if (t.type === `childList`)
				for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
	}).observe(document, { childList: !0, subtree: !0 });
	function t(e) {
		let t = {};
		return (
			e.integrity && (t.integrity = e.integrity),
			e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
			e.crossOrigin === `use-credentials`
				? (t.credentials = `include`)
				: e.crossOrigin === `anonymous`
					? (t.credentials = `omit`)
					: (t.credentials = `same-origin`),
			t
		);
	}
	function n(e) {
		if (e.ep) return;
		e.ep = !0;
		let n = t(e);
		fetch(e.href, n);
	}
})(),
	typeof window < `u` && ((window.__svelte ??= {}).v ??= new Set()).add(`5`));
var l = !1,
	u = !1;
function d() {
	u = !0;
}
d();
var f = {},
	p = Symbol(`uninitialized`),
	m = `http://www.w3.org/1999/xhtml`,
	h = Array.isArray,
	g = Array.prototype.indexOf,
	_ = Array.prototype.includes,
	v = Array.from,
	y = Object.defineProperty,
	b = Object.getOwnPropertyDescriptor,
	x = Object.getOwnPropertyDescriptors,
	S = Object.prototype,
	ee = Array.prototype,
	te = Object.getPrototypeOf,
	ne = Object.isExtensible,
	C = () => {};
function re(e) {
	return e();
}
function ie(e) {
	for (var t = 0; t < e.length; t++) e[t]();
}
function ae() {
	var e, t;
	return {
		promise: new Promise((n, r) => {
			((e = n), (t = r));
		}),
		resolve: e,
		reject: t
	};
}
var oe = 1 << 24,
	w = 1024,
	T = 2048,
	se = 4096,
	ce = 8192,
	le = 16384,
	ue = 32768,
	de = 1 << 25,
	fe = 65536,
	pe = 1 << 19,
	me = 1 << 20,
	he = 1 << 25,
	ge = 65536,
	_e = 1 << 21,
	ve = 1 << 22,
	ye = 1 << 23,
	be = Symbol(`$state`),
	xe = Symbol(`legacy props`),
	Se = Symbol(``),
	Ce = Symbol(`attributes`),
	we = Symbol(`class`),
	Te = Symbol(`style`),
	Ee = Symbol(`text`),
	De = Symbol(`form reset`),
	Oe = new (class extends Error {
		name = `StaleReactionError`;
		message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
	})(),
	ke = !!globalThis.document?.contentType && globalThis.document.contentType.includes(`xml`);
function Ae(e) {
	throw Error(`https://svelte.dev/e/lifecycle_outside_component`);
}
function je() {
	throw Error(`https://svelte.dev/e/async_derived_orphan`);
}
function Me(e, t, n) {
	throw Error(`https://svelte.dev/e/each_key_duplicate`);
}
function Ne(e) {
	throw Error(`https://svelte.dev/e/effect_in_teardown`);
}
function Pe() {
	throw Error(`https://svelte.dev/e/effect_in_unowned_derived`);
}
function Fe(e) {
	throw Error(`https://svelte.dev/e/effect_orphan`);
}
function Ie() {
	throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
}
function Le(e) {
	throw Error(`https://svelte.dev/e/props_invalid_value`);
}
function Re() {
	throw Error(`https://svelte.dev/e/state_descriptors_fixed`);
}
function ze() {
	throw Error(`https://svelte.dev/e/state_prototype_fixed`);
}
function Be() {
	throw Error(`https://svelte.dev/e/state_unsafe_mutation`);
}
function Ve() {
	throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
}
function He() {
	console.warn(`https://svelte.dev/e/derived_inert`);
}
function Ue(e) {
	console.warn(`https://svelte.dev/e/hydration_mismatch`);
}
function We() {
	console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
}
function Ge() {
	console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
}
var E = !1;
function Ke(e) {
	E = e;
}
var D;
function qe(e) {
	if (e === null) throw (Ue(), f);
	return (D = e);
}
function Je() {
	return qe(yn(D));
}
function O(e) {
	if (E) {
		if (yn(D) !== null) throw (Ue(), f);
		D = e;
	}
}
function Ye(e = 1) {
	if (E) {
		for (var t = e, n = D; t--; ) n = yn(n);
		D = n;
	}
}
function Xe(e = !0) {
	for (var t = 0, n = D; ; ) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === `]`) {
				if (t === 0) return n;
				--t;
			} else (r === `[` || r === `[!` || (r[0] === `[` && !isNaN(Number(r.slice(1))))) && (t += 1);
		}
		var i = yn(n);
		(e && n.remove(), (n = i));
	}
}
function Ze(e) {
	if (!e || e.nodeType !== 8) throw (Ue(), f);
	return e.data;
}
function Qe(e) {
	return e === this.v;
}
function $e(e, t) {
	return e == e ? e !== t || (typeof e == `object` && !!e) || typeof e == `function` : t == t;
}
function et(e) {
	return !$e(e, this.v);
}
var k = null;
function tt(e) {
	k = e;
}
function nt(e, t = !1, n) {
	k = {
		p: k,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: V,
		l: u && !t ? { s: null, u: null, $: [] } : null
	};
}
function rt(e) {
	var t = k,
		n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) Fn(r);
	}
	return (e !== void 0 && (t.x = e), (t.i = !0), (k = t.p), e ?? {});
}
function it() {
	return !u || (k !== null && k.l === null);
}
var at = [];
function ot() {
	var e = at;
	((at = []), ie(e));
}
function st(e) {
	if (at.length === 0 && !Lt) {
		var t = at;
		queueMicrotask(() => {
			t === at && ot();
		});
	}
	at.push(e);
}
function ct(e) {
	var t = V;
	if (t === null) return ((B.f |= ye), e);
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	lt(e, t);
}
function lt(e, t) {
	for (; t !== null; ) {
		if (t.f & 128) {
			if (!(t.f & 32768)) throw e;
			try {
				t.b.error(e);
				return;
			} catch (t) {
				e = t;
			}
		}
		t = t.parent;
	}
	throw e;
}
var ut = ~(T | se | w);
function A(e, t) {
	e.f = (e.f & ut) | t;
}
function dt(e) {
	e.f & 512 || e.deps === null ? A(e, w) : A(e, se);
}
function ft(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || ((t.f ^= ge), ft(t.deps));
}
function pt(e, t, n) {
	(e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), ft(e.deps), A(e, w));
}
var mt = !1,
	ht = !1;
function gt(e) {
	var t = ht;
	try {
		return ((ht = !1), [e(), ht]);
	} finally {
		ht = t;
	}
}
function _t(e) {
	let t = 0,
		n = tn(0),
		r;
	return () => {
		Mn() &&
			(G(n),
			Vn(
				() => (
					t === 0 && (r = K(() => e(() => sn(n)))),
					(t += 1),
					() => {
						st(() => {
							(--t, t === 0 && (r?.(), (r = void 0), sn(n)));
						});
					}
				)
			));
	};
}
var vt = fe | pe;
function yt(e, t, n, r) {
	new bt(e, t, n, r);
}
var bt = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = E ? D : null;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = null;
	#c = null;
	#l = 0;
	#u = 0;
	#d = !1;
	#f = new Set();
	#p = new Set();
	#m = null;
	#h = _t(
		() => (
			(this.#m = tn(this.#l)),
			() => {
				this.#m = null;
			}
		)
	);
	constructor(e, t, n, r) {
		((this.#e = e),
			(this.#n = t),
			(this.#r = (e) => {
				var t = V;
				((t.b = this), (t.f |= 128), n(e));
			}),
			(this.parent = V.b),
			(this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e)),
			(this.#i = Un(() => {
				if (E) {
					let e = this.#t;
					Je();
					let t = e.data === `[!`;
					if (e.data.startsWith(`[?`)) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, vt)),
			E && (this.#e = D));
	}
	#g() {
		try {
			this.#a = Gn(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t &&
			(this.#s = Gn(() => {
				t(
					this.#e,
					() => e,
					() => () => {}
				);
			}));
	}
	#v() {
		let e = this.#n.pending;
		e &&
			((this.is_pending = !0),
			(this.#o = Gn(() => e(this.#e))),
			st(() => {
				var e = (this.#c = document.createDocumentFragment()),
					t = _n();
				(e.append(t),
					(this.#a = this.#x(() => Gn(() => this.#r(t)))),
					this.#u === 0 &&
						(this.#e.before(e),
						(this.#c = null),
						Zn(this.#o, () => {
							this.#o = null;
						}),
						this.#b(M)));
			}));
	}
	#y() {
		try {
			if (
				((this.is_pending = this.has_pending_snippet()),
				(this.#u = 0),
				(this.#l = 0),
				(this.#a = Gn(() => {
					this.#r(this.#e);
				})),
				this.#u > 0)
			) {
				var e = (this.#c = document.createDocumentFragment());
				tr(this.#a, e);
				let t = this.#n.pending;
				this.#o = Gn(() => t(this.#e));
			} else this.#b(M);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		((this.is_pending = !1), e.transfer_effects(this.#f, this.#p));
	}
	defer_effect(e) {
		pt(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = V,
			n = B,
			r = k;
		(H(this.#i), sr(this.#i), tt(this.#i.ctx));
		try {
			return (Ut.ensure(), e());
		} catch (e) {
			return (ct(e), null);
		} finally {
			(H(t), sr(n), tt(r));
		}
	}
	#S(e, t) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#S(e, t);
			return;
		}
		((this.#u += e),
			this.#u === 0 &&
				(this.#b(t),
				this.#o &&
					Zn(this.#o, () => {
						this.#o = null;
					}),
				(this.#c &&= (this.#e.before(this.#c), null))));
	}
	update_pending_count(e, t) {
		(this.#S(e, t),
			(this.#l += e),
			!(!this.#m || this.#d) &&
				((this.#d = !0),
				st(() => {
					((this.#d = !1), this.#m && rn(this.#m, this.#l));
				})));
	}
	get_effect_pending() {
		return (this.#h(), G(this.#m));
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		M?.is_fork
			? (this.#a && M.skip_effect(this.#a),
				this.#o && M.skip_effect(this.#o),
				this.#s && M.skip_effect(this.#s),
				M.oncommit(() => {
					this.#C(e);
				}))
			: this.#C(e);
	}
	#C(e) {
		((this.#a &&= (z(this.#a), null)),
			(this.#o &&= (z(this.#o), null)),
			(this.#s &&= (z(this.#s), null)),
			E && (qe(this.#t), Ye(), qe(Xe())));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1,
			i = !1;
		let a = () => {
				if (r) {
					Ge();
					return;
				}
				((r = !0),
					i && Ve(),
					this.#s !== null &&
						Zn(this.#s, () => {
							this.#s = null;
						}),
					this.#x(() => {
						this.#y();
					}));
			},
			o = (e) => {
				try {
					((i = !0), t?.(e, a), (i = !1));
				} catch (e) {
					lt(e, this.#i && this.#i.parent);
				}
				n &&
					(this.#s = this.#x(() => {
						try {
							return Gn(() => {
								var t = V;
								((t.b = this),
									(t.f |= 128),
									n(
										this.#e,
										() => e,
										() => a
									));
							});
						} catch (e) {
							return (lt(e, this.#i.parent), null);
						}
					}));
			};
		st(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				lt(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == `object` && t && typeof t.then == `function`
				? t.then(o, (e) => lt(e, this.#i && this.#i.parent))
				: o(t);
		});
	}
};
function xt(e, t, n, r) {
	let i = it() ? Tt : j;
	var a = e.filter((e) => !e.settled),
		o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = V,
		c = St(),
		l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				lt(e, s);
			}
			Ct();
		}
	}
	var d = wt();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => Dt(e)))
			.then(u)
			.catch((e) => lt(e, s))
			.finally(d);
	}
	l
		? l.then(() => {
				(c(), f(), Ct());
			})
		: f();
}
function St() {
	var e = V,
		t = B,
		n = k,
		r = M;
	return function (i = !0) {
		(H(e), sr(t), tt(n), i && !(e.f & 16384) && (r?.activate(), r?.apply()));
	};
}
function Ct(e = !0) {
	(H(null), sr(null), tt(null), e && M?.deactivate());
}
function wt() {
	var e = V,
		t = e.b,
		n = M,
		r = !!t?.is_rendered();
	return (
		t?.update_pending_count(1, n),
		n.increment(r, e),
		() => {
			(t?.update_pending_count(-1, n), n.decrement(r, e));
		}
	);
}
function Tt(e) {
	var t = 2 | T;
	return (
		V !== null && (V.f |= pe),
		{
			ctx: k,
			deps: null,
			effects: null,
			equals: Qe,
			f: t,
			fn: e,
			reactions: null,
			rv: 0,
			v: p,
			wv: 0,
			parent: V,
			ac: null
		}
	);
}
var Et = Symbol(`obsolete`);
function Dt(e, t, n) {
	let r = V;
	r === null && je();
	var i = void 0,
		a = tn(p),
		o = !B,
		s = new Set();
	return (
		Bn(() => {
			var t = V,
				n = ae();
			i = n.promise;
			try {
				Promise.resolve(e())
					.then(n.resolve, (e) => {
						e !== Oe && n.reject(e);
					})
					.finally(Ct);
			} catch (e) {
				(n.reject(e), Ct());
			}
			var c = M;
			if (o) {
				if (t.f & 32768) var l = wt();
				if (r.b?.is_rendered()) c.async_deriveds.get(t)?.reject(Et);
				else for (let e of s.values()) e.reject(Et);
				(s.add(n), c.async_deriveds.set(t, n));
			}
			let u = (e, t = void 0) => {
				(l?.(),
					s.delete(n),
					t !== Et &&
						(c.activate(),
						t ? ((a.f |= ye), rn(a, t)) : (a.f & 8388608 && (a.f ^= ye), rn(a, e)),
						c.deactivate()));
			};
			n.promise.then(u, (e) => u(null, e || `unknown`));
		}),
		Nn(() => {
			for (let e of s) e.reject(Et);
		}),
		new Promise((e) => {
			function t(n) {
				function r() {
					n === i ? e(a) : t(i);
				}
				n.then(r, r);
			}
			t(i);
		})
	);
}
function j(e) {
	let t = Tt(e);
	return ((t.equals = et), t);
}
function Ot(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) z(t[n]);
	}
}
function kt(e) {
	var t,
		n = V,
		r = e.parent;
	if (!ir && r !== null && e.v !== p && r.f & 24576) return (He(), e.v);
	H(r);
	try {
		((e.f &= ~ge), Ot(e), (t = yr(e)));
	} finally {
		H(n);
	}
	return t;
}
function At(e) {
	var t = kt(e);
	if (
		!e.equals(t) &&
		((e.wv = gr()),
		(!M?.is_fork || e.deps === null) &&
			(M === null ? (e.v = t) : (M.capture(e, t, !0), Ft?.capture(e, t, !0)), e.deps === null))
	) {
		A(e, w);
		return;
	}
	ir || (N === null ? dt(e) : (Mn() || M?.is_fork) && N.set(e, t));
}
function jt(e) {
	if (e.effects !== null)
		for (let t of e.effects)
			(t.teardown || t.ac) &&
				(t.teardown?.(),
				t.ac?.abort(Oe),
				t.fn !== null && (t.teardown = C),
				(t.ac = null),
				xr(t, 0),
				qn(t));
}
function Mt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Sr(t);
}
var Nt = null,
	Pt = null,
	M = null,
	Ft = null,
	N = null,
	It = null,
	Lt = !1,
	Rt = !1,
	zt = null,
	Bt = null,
	Vt = 0,
	Ht = 1,
	Ut = class e {
		id = Ht++;
		#e = !1;
		linked = !0;
		#t = null;
		#n = null;
		async_deriveds = new Map();
		current = new Map();
		previous = new Map();
		#r = new Set();
		#i = new Set();
		#a = 0;
		#o = new Map();
		#s = null;
		#c = [];
		#l = [];
		#u = new Set();
		#d = new Set();
		#f = new Map();
		#p = new Set();
		is_fork = !1;
		#m = !1;
		constructor() {
			(Pt === null ? (Nt = Pt = this) : ((Pt.#n = this), (this.#t = Pt)), (Pt = this));
		}
		#h() {
			if (this.is_fork) return !0;
			for (let n of this.#o.keys()) {
				for (var e = n, t = !1; e.parent !== null; ) {
					if (this.#f.has(e)) {
						t = !0;
						break;
					}
					e = e.parent;
				}
				if (!t) return !0;
			}
			return !1;
		}
		skip_effect(e) {
			(this.#f.has(e) || this.#f.set(e, { d: [], m: [] }), this.#p.delete(e));
		}
		unskip_effect(e, t = (e) => this.schedule(e)) {
			var n = this.#f.get(e);
			if (n) {
				this.#f.delete(e);
				for (var r of n.d) (A(r, T), t(r));
				for (r of n.m) (A(r, se), t(r));
			}
			this.#p.add(e);
		}
		#g() {
			((this.#e = !0), Vt++ > 1e3 && (this.#S(), Wt()));
			for (let e of this.#u) (this.#d.delete(e), A(e, T), this.schedule(e));
			for (let e of this.#d) (A(e, se), this.schedule(e));
			let t = this.#c;
			((this.#c = []), this.apply());
			var n = (zt = []),
				r = [],
				i = (Bt = []);
			for (let e of t)
				try {
					this.#_(e, n, r);
				} catch (t) {
					throw (Zt(e), this.#h() || this.discard(), t);
				}
			if (((M = null), i.length > 0)) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (((zt = null), (Bt = null), this.#h())) {
				(this.#b(r), this.#b(n));
				for (let [e, t] of this.#f) Xt(e, t);
				i.length > 0 && M.#g();
				return;
			}
			let o = this.#v();
			if (o) {
				(this.#b(r), this.#b(n), o.#y(this));
				return;
			}
			(this.#u.clear(), this.#d.clear());
			for (let e of this.#r) e(this);
			(this.#r.clear(), (Ft = this), Kt(r), Kt(n), (Ft = null), this.#s?.resolve());
			var s = M;
			if (
				(this.#a === 0 &&
					(this.#c.length === 0 || s !== null) &&
					(this.#S(), l && (this.#x(), (M = s))),
				this.#c.length > 0)
			)
				if (s !== null) {
					let e = s;
					e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
				} else s = this;
			s !== null && s.#g();
		}
		#_(e, t, n) {
			e.f ^= w;
			for (var r = e.first; r !== null; ) {
				var i = r.f,
					a = (i & 96) != 0;
				if (!((a && i & 1024) || i & 8192 || this.#f.has(r)) && r.fn !== null) {
					a
						? (r.f ^= w)
						: i & 4
							? t.push(r)
							: l && i & 16777224
								? n.push(r)
								: _r(r) && (i & 16 && this.#d.add(r), Sr(r));
					var o = r.first;
					if (o !== null) {
						r = o;
						continue;
					}
				}
				for (; r !== null; ) {
					var s = r.next;
					if (s !== null) {
						r = s;
						break;
					}
					r = r.parent;
				}
			}
		}
		#v() {
			for (var e = this.#t; e !== null; ) {
				if (!e.is_fork) {
					for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
				}
				e = e.#t;
			}
			return null;
		}
		#y(e) {
			for (let [t, n] of e.current)
				(!this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)),
					this.current.set(t, n));
			for (let [t, n] of e.async_deriveds) {
				let e = this.async_deriveds.get(t);
				e && n.promise.then(e.resolve).catch(e.reject);
			}
			(e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d));
			let t = (e) => {
				var n = e.reactions;
				if (n !== null)
					for (let e of n) {
						var r = e.f;
						if (r & 2) t(e);
						else {
							var i = e;
							r & 4194320 &&
								!this.async_deriveds.has(i) &&
								(this.#d.delete(i), A(i, T), this.schedule(i));
						}
					}
			};
			for (let e of this.current.keys()) t(e);
			(this.oncommit(() => e.discard()), e.#S(), (M = this), this.#g());
		}
		#b(e) {
			for (var t = 0; t < e.length; t += 1) pt(e[t], this.#u, this.#d);
		}
		capture(e, t, n = !1) {
			(e.v !== p && !this.previous.has(e) && this.previous.set(e, e.v),
				e.f & 8388608 || (this.current.set(e, [t, n]), N?.set(e, t)),
				this.is_fork || (e.v = t));
		}
		activate() {
			M = this;
		}
		deactivate() {
			((M = null), (N = null));
		}
		flush() {
			try {
				((Rt = !0), (M = this), this.#g());
			} finally {
				((Vt = 0),
					(It = null),
					(zt = null),
					(Bt = null),
					(Rt = !1),
					(M = null),
					(N = null),
					$t.clear());
			}
		}
		discard() {
			for (let e of this.#i) e(this);
			this.#i.clear();
			for (let e of this.async_deriveds.values()) e.reject(Et);
			(this.#S(), this.#s?.resolve());
		}
		register_created_effect(e) {
			this.#l.push(e);
		}
		#x() {
			for (let u = Nt; u !== null; u = u.#n) {
				var e = u.id < this.id,
					t = [];
				for (let [r, [i, a]] of this.current) {
					if (u.current.has(r)) {
						var n = u.current.get(r)[0];
						if (e && i !== n) u.current.set(r, [i, a]);
						else continue;
					}
					t.push(r);
				}
				if (e)
					for (let [e, t] of this.async_deriveds) {
						let n = u.async_deriveds.get(e);
						n && t.promise.then(n.resolve).catch(n.reject);
					}
				var r = [...u.current.keys()].filter((e) => !u.current.get(e)[1]);
				if (!(!u.#e || r.length === 0)) {
					var i = r.filter((e) => !this.current.has(e));
					if (i.length === 0) e && u.discard();
					else if (t.length > 0) {
						if (e)
							for (let e of this.#p)
								u.unskip_effect(e, (e) => {
									e.f & 4194320 ? u.schedule(e) : u.#b([e]);
								});
						u.activate();
						var a = new Set(),
							o = new Map();
						for (var s of t) qt(s, i, a, o);
						o = new Map();
						var c = [...u.current]
							.filter(([e, t]) => {
								let n = this.current.get(e);
								return n ? n[0] !== t[0] || n[1] !== t[1] : !0;
							})
							.map(([e]) => e);
						if (c.length > 0)
							for (let e of this.#l)
								!(e.f & 155648) &&
									Jt(e, c, o) &&
									(e.f & 4194320 ? (A(e, T), u.schedule(e)) : u.#u.add(e));
						if (u.#c.length > 0 && !u.#m) {
							u.apply();
							for (var l of u.#c) u.#_(l, [], []);
							u.#c = [];
						}
						u.deactivate();
					}
				}
			}
		}
		increment(e, t) {
			if (((this.#a += 1), e)) {
				let e = this.#o.get(t) ?? 0;
				this.#o.set(t, e + 1);
			}
		}
		decrement(e, t) {
			if ((--this.#a, e)) {
				let e = this.#o.get(t) ?? 0;
				e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
			}
			this.#m ||
				((this.#m = !0),
				st(() => {
					((this.#m = !1), this.linked && this.flush());
				}));
		}
		transfer_effects(e, t) {
			for (let t of e) this.#u.add(t);
			for (let e of t) this.#d.add(e);
			(e.clear(), t.clear());
		}
		oncommit(e) {
			this.#r.add(e);
		}
		ondiscard(e) {
			this.#i.add(e);
		}
		settled() {
			return (this.#s ??= ae()).promise;
		}
		static ensure() {
			if (M === null) {
				let t = (M = new e());
				!Rt &&
					!Lt &&
					st(() => {
						t.#e || t.flush();
					});
			}
			return M;
		}
		apply() {
			if (!l || (!this.is_fork && this.#t === null && this.#n === null)) {
				N = null;
				return;
			}
			N = new Map();
			for (let [e, [t]] of this.current) N.set(e, t);
			for (let t = Nt; t !== null; t = t.#n)
				if (!(t === this || t.is_fork)) {
					var e = !1;
					if (t.id < this.id) {
						for (let [n, [, r]] of t.current)
							if (!r && this.current.has(n)) {
								e = !0;
								break;
							}
					}
					if (!e) for (let [e, n] of t.previous) N.has(e) || N.set(e, n);
				}
		}
		schedule(e) {
			if (((It = e), e.b?.is_pending && e.f & 16777228 && !(e.f & 32768))) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null; ) {
				t = t.parent;
				var n = t.f;
				if (zt !== null && t === V && (l || ((B === null || !(B.f & 2)) && !mt))) return;
				if (n & 96) {
					if (!(n & 1024)) return;
					t.f ^= w;
				}
			}
			this.#c.push(t);
		}
		#S() {
			if (this.linked) {
				var e = this.#t,
					t = this.#n;
				(e === null ? (Nt = t) : (e.#n = t),
					t === null ? (Pt = e) : (t.#t = e),
					(this.linked = !1));
			}
		}
	};
function Wt() {
	try {
		Ie();
	} catch (e) {
		lt(e, It);
	}
}
var Gt = null;
function Kt(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t; ) {
			var r = e[n++];
			if (
				!(r.f & 24576) &&
				_r(r) &&
				((Gt = new Set()),
				Sr(r),
				r.deps === null &&
					r.first === null &&
					r.nodes === null &&
					r.teardown === null &&
					r.ac === null &&
					Xn(r),
				Gt?.size > 0)
			) {
				$t.clear();
				for (let e of Gt) {
					if (e.f & 24576) continue;
					let t = [e],
						n = e.parent;
					for (; n !== null; ) (Gt.has(n) && (Gt.delete(n), t.push(n)), (n = n.parent));
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Sr(n);
					}
				}
				Gt.clear();
			}
		}
		Gt = null;
	}
}
function qt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null))
		for (let i of e.reactions) {
			let e = i.f;
			e & 2 ? qt(i, t, n, r) : e & 4194320 && !(e & 2048) && Jt(i, t, r) && (A(i, T), Yt(i));
		}
}
function Jt(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null)
		for (let r of e.deps) {
			if (_.call(t, r)) return !0;
			if (r.f & 2 && Jt(r, t, n)) return (n.set(r, !0), !0);
		}
	return (n.set(e, !1), !1);
}
function Yt(e) {
	M.schedule(e);
}
function Xt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		(e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), A(e, w));
		for (var n = e.first; n !== null; ) (Xt(n, t), (n = n.next));
	}
}
function Zt(e) {
	A(e, w);
	for (var t = e.first; t !== null; ) (Zt(t), (t = t.next));
}
var Qt = new Set(),
	$t = new Map(),
	en = !1;
function tn(e, t) {
	return { f: 0, v: e, reactions: null, equals: Qe, rv: 0, wv: 0 };
}
function nn(e, t) {
	let n = tn(e, t);
	return (lr(n), n);
}
function P(e, t = !1, n = !0) {
	let r = tn(e);
	return (t || (r.equals = et), u && n && k !== null && k.l !== null && (k.l.s ??= []).push(r), r);
}
function F(e, t, n = !1) {
	return (
		B !== null &&
			(!or || B.f & 131072) &&
			it() &&
			B.f & 4325394 &&
			(cr === null || !cr.has(e)) &&
			Be(),
		rn(e, n ? ln(t) : t, Bt)
	);
}
function rn(e, t, n = null) {
	if (!e.equals(t)) {
		$t.set(e, ir ? t : e.v);
		var r = Ut.ensure();
		if ((r.capture(e, t), e.f & 2)) {
			let t = e;
			(e.f & 2048 && kt(t), N === null && dt(t));
		}
		((e.wv = gr()),
			cn(e, T, n),
			it() && V !== null && V.f & 1024 && !(V.f & 96) && (ur === null ? dr([e]) : ur.push(e)),
			!r.is_fork && Qt.size > 0 && !en && an());
	}
	return t;
}
function an() {
	en = !1;
	for (let e of Qt) {
		e.f & 1024 && A(e, se);
		let t;
		try {
			t = _r(e);
		} catch {
			t = !0;
		}
		t && Sr(e);
	}
	Qt.clear();
}
function on(e, t = 1) {
	var n = G(e),
		r = t === 1 ? n++ : n--;
	return (F(e, n), r);
}
function sn(e) {
	F(e, e.v + 1);
}
function cn(e, t, n) {
	var r = e.reactions;
	if (r !== null)
		for (var i = it(), a = r.length, o = 0; o < a; o++) {
			var s = r[o],
				c = s.f;
			if (!(!i && s === V)) {
				var l = (c & T) === 0;
				if ((l && A(s, t), c & 131072)) Qt.add(s);
				else if (c & 2) {
					var u = s;
					(N?.delete(u),
						c & 65536 ||
							(c & 512 && (V === null || !(V.f & 2097152)) && (s.f |= ge), cn(u, se, n)));
				} else if (l) {
					var d = s;
					(c & 16 && Gt !== null && Gt.add(d), n === null ? Yt(d) : n.push(d));
				}
			}
		}
}
function ln(e) {
	if (typeof e != `object` || !e || be in e) return e;
	let t = te(e);
	if (t !== S && t !== ee) return e;
	var n = new Map(),
		r = h(e),
		i = nn(0),
		a = null,
		o = mr,
		s = (e) => {
			if (mr === o) return e();
			var t = B,
				n = mr;
			(sr(null), hr(o));
			var r = e();
			return (sr(t), hr(n), r);
		};
	return (
		r && n.set(`length`, nn(e.length, a)),
		new Proxy(e, {
			defineProperty(e, t, r) {
				(!(`value` in r) || r.configurable === !1 || r.enumerable === !1 || r.writable === !1) &&
					Re();
				var i = n.get(t);
				return (
					i === void 0
						? s(() => {
								var e = nn(r.value, a);
								return (n.set(t, e), e);
							})
						: F(i, r.value, !0),
					!0
				);
			},
			deleteProperty(e, t) {
				var r = n.get(t);
				if (r === void 0) {
					if (t in e) {
						let e = s(() => nn(p, a));
						(n.set(t, e), sn(i));
					}
				} else (F(r, p), sn(i));
				return !0;
			},
			get(t, r, i) {
				if (r === be) return e;
				var o = n.get(r),
					c = r in t;
				if (
					(o === void 0 &&
						(!c || b(t, r)?.writable) &&
						((o = s(() => nn(ln(c ? t[r] : p), a))), n.set(r, o)),
					o !== void 0)
				) {
					var l = G(o);
					return l === p ? void 0 : l;
				}
				return Reflect.get(t, r, i);
			},
			getOwnPropertyDescriptor(e, t) {
				var r = Reflect.getOwnPropertyDescriptor(e, t);
				if (r && `value` in r) {
					var i = n.get(t);
					i && (r.value = G(i));
				} else if (r === void 0) {
					var a = n.get(t),
						o = a?.v;
					if (a !== void 0 && o !== p)
						return { enumerable: !0, configurable: !0, value: o, writable: !0 };
				}
				return r;
			},
			has(e, t) {
				if (t === be) return !0;
				var r = n.get(t),
					i = (r !== void 0 && r.v !== p) || Reflect.has(e, t);
				return (r !== void 0 || (V !== null && (!i || b(e, t)?.writable))) &&
					(r === void 0 && ((r = s(() => nn(i ? ln(e[t]) : p, a))), n.set(t, r)), G(r) === p)
					? !1
					: i;
			},
			set(e, t, o, c) {
				var l = n.get(t),
					u = t in e;
				if (r && t === `length`)
					for (var d = o; d < l.v; d += 1) {
						var f = n.get(d + ``);
						f === void 0 ? d in e && ((f = s(() => nn(p, a))), n.set(d + ``, f)) : F(f, p);
					}
				if (l === void 0)
					(!u || b(e, t)?.writable) && ((l = s(() => nn(void 0, a))), F(l, ln(o)), n.set(t, l));
				else {
					u = l.v !== p;
					var m = s(() => ln(o));
					F(l, m);
				}
				var h = Reflect.getOwnPropertyDescriptor(e, t);
				if ((h?.set && h.set.call(c, o), !u)) {
					if (r && typeof t == `string`) {
						var g = n.get(`length`),
							_ = Number(t);
						Number.isInteger(_) && _ >= g.v && F(g, _ + 1);
					}
					sn(i);
				}
				return !0;
			},
			ownKeys(e) {
				G(i);
				var t = Reflect.ownKeys(e).filter((e) => {
					var t = n.get(e);
					return t === void 0 || t.v !== p;
				});
				for (var [r, a] of n) a.v !== p && !(r in e) && t.push(r);
				return t;
			},
			setPrototypeOf() {
				ze();
			}
		})
	);
}
function un(e) {
	try {
		if (typeof e == `object` && e && be in e) return e[be];
	} catch {}
	return e;
}
function dn(e, t) {
	return Object.is(un(e), un(t));
}
new Set([`copyWithin`, `fill`, `pop`, `push`, `reverse`, `shift`, `sort`, `splice`, `unshift`]);
var fn, pn, mn, hn;
function gn() {
	if (fn === void 0) {
		((fn = window), (pn = /Firefox/.test(navigator.userAgent)));
		var e = Element.prototype,
			t = Node.prototype,
			n = Text.prototype;
		((mn = b(t, `firstChild`).get),
			(hn = b(t, `nextSibling`).get),
			ne(e) && ((e[we] = void 0), (e[Ce] = null), (e[Te] = void 0), (e.__e = void 0)),
			ne(n) && (n[Ee] = void 0));
	}
}
function _n(e = ``) {
	return document.createTextNode(e);
}
function vn(e) {
	return mn.call(e);
}
function yn(e) {
	return hn.call(e);
}
function I(e, t) {
	if (!E) return vn(e);
	var n = vn(D);
	if (n === null) n = D.appendChild(_n());
	else if (t && n.nodeType !== 3) {
		var r = _n();
		return (n?.before(r), qe(r), r);
	}
	return (t && wn(n), qe(n), n);
}
function bn(e, t = !1) {
	if (!E) {
		var n = vn(e);
		return n instanceof Comment && n.data === `` ? yn(n) : n;
	}
	if (t) {
		if (D?.nodeType !== 3) {
			var r = _n();
			return (D?.before(r), qe(r), r);
		}
		wn(D);
	}
	return D;
}
function L(e, t = 1, n = !1) {
	let r = E ? D : e;
	for (var i; t--; ) ((i = r), (r = yn(r)));
	if (!E) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = _n();
			return (r === null ? i?.after(a) : r.before(a), qe(a), a);
		}
		wn(r);
	}
	return (qe(r), r);
}
function xn(e) {
	e.textContent = ``;
}
function Sn() {
	return !l || Gt !== null ? !1 : (V.f & ue) !== 0;
}
function Cn(e, t, n) {
	return t == null || t === `http://www.w3.org/1999/xhtml`
		? n
			? document.createElement(e, { is: n })
			: document.createElement(e)
		: n
			? document.createElementNS(t, e, { is: n })
			: document.createElementNS(t, e);
}
function wn(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3; )
		(t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
function Tn(e, t) {
	if (t) {
		let t = document.body;
		((e.autofocus = !0),
			st(() => {
				document.activeElement === t && e.focus();
			}));
	}
}
var En = !1;
function Dn() {
	En ||
		((En = !0),
		document.addEventListener(
			`reset`,
			(e) => {
				Promise.resolve().then(() => {
					if (!e.defaultPrevented) for (let t of e.target.elements) t[De]?.();
				});
			},
			{ capture: !0 }
		));
}
function On(e) {
	var t = B,
		n = V;
	(sr(null), H(null));
	try {
		return e();
	} finally {
		(sr(t), H(n));
	}
}
function kn(e) {
	(V === null && (B === null && Fe(e), Pe()), ir && Ne(e));
}
function An(e, t) {
	var n = t.last;
	n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function jn(e, t) {
	var n = V;
	n !== null && n.f & 8192 && (e |= ce);
	var r = {
		ctx: k,
		deps: null,
		nodes: null,
		f: e | T | 512,
		first: null,
		fn: t,
		last: null,
		next: null,
		parent: n,
		b: n && n.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	M?.register_created_effect(r);
	var i = r;
	if (e & 4) zt === null ? Ut.ensure().schedule(r) : zt.push(r);
	else if (t !== null) {
		try {
			Sr(r);
		} catch (e) {
			throw (z(r), e);
		}
		i.deps === null &&
			i.teardown === null &&
			i.nodes === null &&
			i.first === i.last &&
			!(i.f & 524288) &&
			((i = i.first), e & 16 && e & 65536 && i !== null && (i.f |= fe));
	}
	if (i !== null && ((i.parent = n), n !== null && An(i, n), B !== null && B.f & 2 && !(e & 64))) {
		var a = B;
		(a.effects ??= []).push(i);
	}
	return r;
}
function Mn() {
	return B !== null && !or;
}
function Nn(e) {
	let t = jn(8, null);
	return (A(t, w), (t.teardown = e), t);
}
function Pn(e) {
	kn(`$effect`);
	var t = V.f;
	if (!B && t & 32 && k !== null && !k.i) {
		var n = k;
		(n.e ??= []).push(e);
	} else return Fn(e);
}
function Fn(e) {
	return jn(4 | me, e);
}
function In(e) {
	return (kn(`$effect.pre`), jn(8 | me, e));
}
function Ln(e) {
	Ut.ensure();
	let t = jn(64 | pe, e);
	return (e = {}) =>
		new Promise((n) => {
			e.outro
				? Zn(t, () => {
						(z(t), n(void 0));
					})
				: (z(t), n(void 0));
		});
}
function Rn(e) {
	return jn(4, e);
}
function R(e, t) {
	var n = k,
		r = { effect: null, ran: !1, deps: e };
	(n.l.$.push(r),
		(r.effect = Vn(() => {
			if ((e(), !r.ran)) {
				r.ran = !0;
				var n = V;
				try {
					(H(n.parent), K(t));
				} finally {
					H(n);
				}
			}
		})));
}
function zn() {
	var e = k;
	Vn(() => {
		for (var t of e.l.$) {
			t.deps();
			var n = t.effect;
			(n.f & 1024 && n.deps !== null && A(n, se), _r(n) && Sr(n), (t.ran = !1));
		}
	});
}
function Bn(e) {
	return jn(ve | pe, e);
}
function Vn(e, t = 0) {
	return jn(8 | t, e);
}
function Hn(e, t = [], n = [], r = []) {
	xt(r, t, n, (t) => {
		jn(8, () => {
			e(...t.map(G));
		});
	});
}
function Un(e, t = 0) {
	return jn(16 | t, e);
}
function Wn(e, t = 0) {
	return jn(oe | t, e);
}
function Gn(e) {
	return jn(32 | pe, e);
}
function Kn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = ir,
			n = B;
		(ar(!0), sr(null));
		try {
			t.call(null);
		} finally {
			(ar(e), sr(n));
		}
	}
}
function qn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null; ) {
		let e = n.ac;
		e !== null &&
			On(() => {
				e.abort(Oe);
			});
		var r = n.next;
		(n.f & 64 ? (n.parent = null) : z(n, t), (n = r));
	}
}
function Jn(e) {
	for (var t = e.first; t !== null; ) {
		var n = t.next;
		(t.f & 32 || z(t), (t = n));
	}
}
function z(e, t = !0) {
	var n = !1;
	((t || e.f & 262144) &&
		e.nodes !== null &&
		e.nodes.end !== null &&
		(Yn(e.nodes.start, e.nodes.end), (n = !0)),
		(e.f |= de),
		qn(e, t && !n),
		xr(e, 0));
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	(Kn(e), (e.f ^= de), (e.f |= le));
	var i = e.parent;
	(i !== null && i.first !== null && Xn(e),
		(e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null));
}
function Yn(e, t) {
	for (; e !== null; ) {
		var n = e === t ? null : yn(e);
		(e.remove(), (e = n));
	}
}
function Xn(e) {
	var t = e.parent,
		n = e.prev,
		r = e.next;
	(n !== null && (n.next = r),
		r !== null && (r.prev = n),
		t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function Zn(e, t, n = !0) {
	var r = [];
	Qn(e, r, !0);
	var i = () => {
			(n && z(e), t && t());
		},
		a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function Qn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= ce;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null; ) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || ((i.f & 32) != 0 && (e.f & 16) != 0);
				Qn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function $n(e) {
	er(e, !0);
}
function er(e, t) {
	if (e.f & 8192) {
		((e.f ^= ce), e.f & 1024 || (A(e, T), Ut.ensure().schedule(e)));
		for (var n = e.first; n !== null; ) {
			var r = n.next,
				i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			(er(n, i ? t : !1), (n = r));
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function tr(e, t) {
	if (e.nodes)
		for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
			var i = n === r ? null : yn(n);
			(t.append(n), (n = i));
		}
}
var nr = null,
	rr = !1,
	ir = !1;
function ar(e) {
	ir = e;
}
var B = null,
	or = !1;
function sr(e) {
	B = e;
}
var V = null;
function H(e) {
	V = e;
}
var cr = null;
function lr(e) {
	B !== null && (!l || B.f & 2) && (cr ??= new Set()).add(e);
}
var U = null,
	W = 0,
	ur = null;
function dr(e) {
	ur = e;
}
var fr = 1,
	pr = 0,
	mr = pr;
function hr(e) {
	mr = e;
}
function gr() {
	return ++fr;
}
function _r(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if ((t & 2 && (e.f &= ~ge), t & 4096)) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if ((_r(a) && At(a), a.wv > e.wv)) return !0;
		}
		t & 512 && N === null && A(e, w);
	}
	return !1;
}
function vr(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!l && cr !== null && cr.has(e)))
		for (var i = 0; i < r.length; i++) {
			var a = r[i];
			a.f & 2 ? vr(a, t, !1) : t === a && (n ? A(a, T) : a.f & 1024 && A(a, se), Yt(a));
		}
}
function yr(e) {
	var t = U,
		n = W,
		r = ur,
		i = B,
		a = cr,
		o = k,
		s = or,
		c = mr,
		l = e.f;
	((U = null),
		(W = 0),
		(ur = null),
		(B = l & 96 ? null : e),
		(cr = null),
		tt(e.ctx),
		(or = !1),
		(mr = ++pr),
		e.ac !== null &&
			(On(() => {
				e.ac.abort(Oe);
			}),
			(e.ac = null)));
	try {
		e.f |= _e;
		var u = e.fn,
			d = u();
		e.f |= ue;
		var f = e.deps,
			p = M?.is_fork;
		if (U !== null) {
			var m;
			if ((p || xr(e, W), f !== null && W > 0))
				for (f.length = W + U.length, m = 0; m < U.length; m++) f[W + m] = U[m];
			else e.deps = f = U;
			if (Mn() && e.f & 512) for (m = W; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && W < f.length && (xr(e, W), (f.length = W));
		if (it() && ur !== null && !or && f !== null && !(e.f & 6146))
			for (m = 0; m < ur.length; m++) vr(ur[m], e);
		if (i !== null && i !== e) {
			if ((pr++, i.deps !== null)) for (let e = 0; e < n; e += 1) i.deps[e].rv = pr;
			if (t !== null) for (let e of t) e.rv = pr;
			ur !== null && (r === null ? (r = ur) : r.push(...ur));
		}
		return (e.f & 8388608 && (e.f ^= ye), d);
	} catch (e) {
		return ct(e);
	} finally {
		((e.f ^= _e), (U = t), (W = n), (ur = r), (B = i), (cr = a), tt(o), (or = s), (mr = c));
	}
}
function br(e, t) {
	let n = t.reactions;
	if (n !== null) {
		var r = g.call(n, e);
		if (r !== -1) {
			var i = n.length - 1;
			i === 0 ? (n = t.reactions = null) : ((n[r] = n[i]), n.pop());
		}
	}
	if (n === null && t.f & 2 && (U === null || !_.call(U, t))) {
		var a = t;
		(a.f & 512 && ((a.f ^= 512), (a.f &= ~ge)), a.v !== p && dt(a), jt(a), xr(a, 0));
	}
}
function xr(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) br(e, n[r]);
}
function Sr(e) {
	var t = e.f;
	if (!(t & 16384)) {
		A(e, w);
		var n = V,
			r = rr;
		((V = e), (rr = !0));
		try {
			(t & 16777232 ? Jn(e) : qn(e), Kn(e));
			var i = yr(e);
			((e.teardown = typeof i == `function` ? i : null), (e.wv = fr));
		} finally {
			((rr = r), (V = n));
		}
	}
}
function G(e) {
	var t = (e.f & 2) != 0;
	if (
		(nr?.add(e), B !== null && !or && !(V !== null && V.f & 16384) && (cr === null || !cr.has(e)))
	) {
		var n = B.deps;
		if (B.f & 2097152)
			e.rv < pr &&
				((e.rv = pr),
				U === null && n !== null && n[W] === e ? W++ : U === null ? (U = [e]) : U.push(e));
		else {
			((B.deps ??= []), _.call(B.deps, e) || B.deps.push(e));
			var r = e.reactions;
			r === null ? (e.reactions = [B]) : _.call(r, B) || r.push(B);
		}
	}
	if (ir && $t.has(e)) return $t.get(e);
	if (t) {
		var i = e;
		if (ir) {
			var a = i.v;
			return (((!(i.f & 1024) && i.reactions !== null) || wr(i)) && (a = kt(i)), $t.set(i, a), a);
		}
		var o = (i.f & 512) == 0 && !or && B !== null && (rr || (B.f & 512) != 0),
			s = (i.f & ue) === 0;
		(_r(i) && (o && (i.f |= 512), At(i)), o && !s && (Mt(i), Cr(i)));
	}
	if (N?.has(e)) return N.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Cr(e) {
	if (((e.f |= 512), e.deps !== null))
		for (let t of e.deps) ((t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (Mt(t), Cr(t)));
}
function wr(e) {
	if (e.v === p) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if ($t.has(t) || (t.f & 2 && wr(t))) return !0;
	return !1;
}
function K(e) {
	var t = or;
	try {
		return ((or = !0), e());
	} finally {
		or = t;
	}
}
function q(e) {
	if (!(typeof e != `object` || !e || e instanceof EventTarget)) {
		if (be in e) Tr(e);
		else if (!Array.isArray(e))
			for (let t in e) {
				let n = e[t];
				typeof n == `object` && n && be in n && Tr(n);
			}
	}
}
function Tr(e, t = new Set()) {
	if (typeof e == `object` && e && !(e instanceof EventTarget) && !t.has(e)) {
		(t.add(e), e instanceof Date && e.getTime());
		for (let n in e)
			try {
				Tr(e[n], t);
			} catch {}
		let n = te(e);
		if (
			n !== Object.prototype &&
			n !== Array.prototype &&
			n !== Map.prototype &&
			n !== Set.prototype &&
			n !== Date.prototype
		) {
			let t = x(n);
			for (let n in t) {
				let r = t[n].get;
				if (r)
					try {
						r.call(e);
					} catch {}
			}
		}
	}
}
var Er = Symbol(`events`),
	Dr = new Set(),
	Or = new Set();
function kr(e, t, n, r = {}) {
	function i(e) {
		if ((r.capture || Pr.call(t, e), !e.cancelBubble)) return On(() => n?.call(this, e));
	}
	return (
		e.startsWith(`pointer`) || e.startsWith(`touch`) || e === `wheel`
			? st(() => {
					t.addEventListener(e, i, r);
				})
			: t.addEventListener(e, i, r),
		i
	);
}
function Ar(e, t, n, r, i) {
	var a = { capture: r, passive: i },
		o = kr(e, t, n, a);
	(t === document.body || t === window || t === document || t instanceof HTMLMediaElement) &&
		Nn(() => {
			t.removeEventListener(e, o, a);
		});
}
function jr(e, t, n) {
	(t[Er] ??= {})[e] = n;
}
function Mr(e) {
	for (var t = 0; t < e.length; t++) Dr.add(e[t]);
	for (var n of Or) n(e);
}
var Nr = null;
function Pr(e) {
	var t = this,
		n = t.ownerDocument,
		r = e.type,
		i = e.composedPath?.() || [],
		a = i[0] || e.target;
	Nr = e;
	var o = 0,
		s = Nr === e && e[Er];
	if (s) {
		var c = i.indexOf(s);
		if (c !== -1 && (t === document || t === window)) {
			e[Er] = t;
			return;
		}
		var l = i.indexOf(t);
		if (l === -1) return;
		c <= l && (o = c);
	}
	if (((a = i[o] || e.target), a !== t)) {
		y(e, `currentTarget`, {
			configurable: !0,
			get() {
				return a || n;
			}
		});
		var u = B,
			d = V;
		(sr(null), H(null));
		try {
			for (var f, p = []; a !== null && a !== t; ) {
				try {
					var m = a[Er]?.[r];
					m != null && (!a.disabled || e.target === a) && m.call(a, e);
				} catch (e) {
					f ? p.push(e) : (f = e);
				}
				if (e.cancelBubble) break;
				(o++, (a = o < i.length ? i[o] : null));
			}
			if (f) {
				for (let e of p)
					queueMicrotask(() => {
						throw e;
					});
				throw f;
			}
		} finally {
			((e[Er] = t), delete e.currentTarget, sr(u), H(d));
		}
	}
}
var Fr =
	globalThis?.window?.trustedTypes &&
	globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, { createHTML: (e) => e });
function Ir(e) {
	return Fr?.createHTML(e) ?? e;
}
function Lr(e) {
	var t = Cn(`template`);
	return ((t.innerHTML = Ir(e.replaceAll(`<!>`, `<!---->`))), t.content);
}
function Rr(e, t) {
	var n = V;
	n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function zr(e, t) {
	var n = (t & 1) != 0,
		r = (t & 2) != 0,
		i,
		a = !e.startsWith(`<!>`);
	return () => {
		if (E) return (Rr(D, null), D);
		i === void 0 && ((i = Lr(a ? e : `<!>` + e)), n || (i = vn(i)));
		var t = r || pn ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = vn(t),
				s = t.lastChild;
			Rr(o, s);
		} else Rr(t, t);
		return t;
	};
}
function Br(e, t, n = `svg`) {
	var r = !e.startsWith(`<!>`),
		i = (t & 1) != 0,
		a = `<${n}>${r ? e : `<!>` + e}</${n}>`,
		o;
	return () => {
		if (E) return (Rr(D, null), D);
		if (!o) {
			var e = vn(Lr(a));
			if (i) for (o = document.createDocumentFragment(); vn(e); ) o.appendChild(vn(e));
			else o = vn(e);
		}
		var t = o.cloneNode(!0);
		if (i) {
			var n = vn(t),
				r = t.lastChild;
			Rr(n, r);
		} else Rr(t, t);
		return t;
	};
}
function Vr(e, t) {
	return Br(e, t, `svg`);
}
function Hr(e = ``) {
	if (!E) {
		var t = _n(e + ``);
		return (Rr(t, t), t);
	}
	var n = D;
	return (n.nodeType === 3 ? wn(n) : (n.before((n = _n())), qe(n)), Rr(n, n), n);
}
function Ur(e, t) {
	if (E) {
		var n = V;
		((!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = D), Je());
		return;
	}
	e !== null && e.before(t);
}
function Wr(e) {
	return e.endsWith(`capture`) && e !== `gotpointercapture` && e !== `lostpointercapture`;
}
var Gr = [
	`beforeinput`,
	`click`,
	`change`,
	`dblclick`,
	`contextmenu`,
	`focusin`,
	`focusout`,
	`input`,
	`keydown`,
	`keyup`,
	`mousedown`,
	`mousemove`,
	`mouseout`,
	`mouseover`,
	`mouseup`,
	`pointerdown`,
	`pointermove`,
	`pointerout`,
	`pointerover`,
	`pointerup`,
	`touchend`,
	`touchmove`,
	`touchstart`
];
function Kr(e) {
	return Gr.includes(e);
}
var qr =
		`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(
			`.`
		),
	Jr = {
		formnovalidate: `formNoValidate`,
		ismap: `isMap`,
		nomodule: `noModule`,
		playsinline: `playsInline`,
		readonly: `readOnly`,
		defaultvalue: `defaultValue`,
		defaultchecked: `defaultChecked`,
		srcobject: `srcObject`,
		novalidate: `noValidate`,
		allowfullscreen: `allowFullscreen`,
		disablepictureinpicture: `disablePictureInPicture`,
		disableremoteplayback: `disableRemotePlayback`
	};
function Yr(e) {
	return ((e = e.toLowerCase()), Jr[e] ?? e);
}
[...qr];
var Xr = [`touchstart`, `touchmove`];
function Zr(e) {
	return Xr.includes(e);
}
function Qr(e, t) {
	var n = t == null ? `` : typeof t == `object` ? `${t}` : t;
	n !== (e[Ee] ??= e.nodeValue) && ((e[Ee] = n), (e.nodeValue = `${n}`));
}
function $r(e, t) {
	return ti(e, t);
}
var ei = new Map();
function ti(
	e,
	{ target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0, transformError: s }
) {
	gn();
	var c = void 0,
		l = Ln(() => {
			var o = n ?? t.appendChild(_n());
			yt(
				o,
				{ pending: () => {} },
				(t) => {
					nt({});
					var n = k;
					if (
						(a && (n.c = a),
						i && (r.$$events = i),
						E && Rr(t, null),
						(c = e(t, r) || {}),
						E && ((V.nodes.end = D), D === null || D.nodeType !== 8 || D.data !== `]`))
					)
						throw (Ue(), f);
					rt();
				},
				s
			);
			var l = new Set(),
				u = (e) => {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						if (!l.has(r)) {
							l.add(r);
							var i = Zr(r);
							for (let e of [t, document]) {
								var a = ei.get(e);
								a === void 0 && ((a = new Map()), ei.set(e, a));
								var o = a.get(r);
								o === void 0
									? (e.addEventListener(r, Pr, { passive: i }), a.set(r, 1))
									: a.set(r, o + 1);
							}
						}
					}
				};
			return (
				u(v(Dr)),
				Or.add(u),
				() => {
					for (var e of l)
						for (let n of [t, document]) {
							var r = ei.get(n),
								i = r.get(e);
							--i == 0
								? (n.removeEventListener(e, Pr), r.delete(e), r.size === 0 && ei.delete(n))
								: r.set(e, i);
						}
					(Or.delete(u), o !== n && o.parentNode?.removeChild(o));
				}
			);
		});
	return (ni.set(c, l), c);
}
var ni = new WeakMap();
function ri(e) {
	(k === null && Ae(`onMount`),
		u && k.l !== null
			? ii(k).m.push(e)
			: Pn(() => {
					let t = K(e);
					if (typeof t == `function`) return t;
				}));
}
function ii(e) {
	var t = e.l;
	return (t.u ??= { a: [], b: [], m: [] });
}
function ai(e, t) {
	return t;
}
function oi(e, t, n) {
	for (var r = [], i = t.length, a, o = t.length, s = 0; s < i; s++) {
		let n = t[s];
		Zn(
			n,
			() => {
				if (a) {
					if ((a.pending.delete(n), a.done.add(n), a.pending.size === 0)) {
						var t = e.outrogroups;
						(si(e, v(a.done)), t.delete(a), t.size === 0 && (e.outrogroups = null));
					}
				} else --o;
			},
			!1
		);
	}
	if (o === 0) {
		var c = r.length === 0 && n !== null;
		if (c) {
			var l = n,
				u = l.parentNode;
			(xn(u), u.append(l), e.items.clear());
		}
		si(e, t, !c);
	} else ((a = { pending: new Set(t), done: new Set() }), (e.outrogroups ??= new Set()).add(a));
}
function si(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? ((a.f |= he), tr(a, document.createDocumentFragment())) : z(t[i], n);
	}
}
var ci;
function li(e, t, n, r, i, a = null) {
	var o = e,
		s = new Map();
	if (t & 4) {
		var c = e;
		o = E ? qe(vn(c)) : c.appendChild(_n());
	}
	E && Je();
	var l = null,
		u = j(() => {
			var e = n();
			return h(e) ? e : e == null ? [] : v(e);
		}),
		d,
		f = new Map(),
		p = !0;
	function m(e) {
		_.effect.f & 16384 ||
			(_.pending.delete(e),
			(_.fallback = l),
			di(_, d, o, t, r),
			l !== null &&
				(d.length === 0
					? l.f & 33554432
						? ((l.f ^= he), pi(l, null, o))
						: $n(l)
					: Zn(l, () => {
							l = null;
						})));
	}
	function g(e) {
		_.pending.delete(e);
	}
	var _ = {
		effect: Un(() => {
			d = G(u);
			var e = d.length;
			let c = !1;
			E && (Ze(o) === `[!`) != (e === 0) && ((o = Xe()), qe(o), Ke(!1), (c = !0));
			for (var h = new Set(), _ = M, v = Sn(), y = 0; y < e; y += 1) {
				E && D.nodeType === 8 && D.data === `]` && ((o = D), (c = !0), Ke(!1));
				var b = d[y],
					x = r(b, y),
					S = p ? null : s.get(x);
				(S
					? (S.v && rn(S.v, b), S.i && rn(S.i, y), v && _.unskip_effect(S.e))
					: ((S = fi(s, p ? o : (ci ??= _n()), b, x, y, i, t, n)), p || (S.e.f |= he), s.set(x, S)),
					h.add(x));
			}
			if (
				(e === 0 &&
					a &&
					!l &&
					(p ? (l = Gn(() => a(o))) : ((l = Gn(() => a((ci ??= _n())))), (l.f |= he))),
				e > h.size && Me(``, ``, ``),
				E && e > 0 && qe(Xe()),
				!p)
			)
				if ((f.set(_, h), v)) {
					for (let [e, t] of s) h.has(e) || _.skip_effect(t.e);
					(_.oncommit(m), _.ondiscard(g));
				} else m(_);
			(c && Ke(!0), G(u));
		}),
		flags: t,
		items: s,
		pending: f,
		outrogroups: null,
		fallback: l
	};
	((p = !1), E && (o = D));
}
function ui(e) {
	for (; e !== null && !(e.f & 32); ) e = e.next;
	return e;
}
function di(e, t, n, r, i) {
	var a = (r & 8) != 0,
		o = t.length,
		s = e.items,
		c = ui(e.effect.first),
		l,
		u = null,
		d,
		f = [],
		p = [],
		m,
		h,
		g,
		_;
	if (a)
		for (_ = 0; _ < o; _ += 1)
			((m = t[_]),
				(h = i(m, _)),
				(g = s.get(h).e),
				g.f & 33554432 || (g.nodes?.a?.measure(), (d ??= new Set()).add(g)));
	for (_ = 0; _ < o; _ += 1) {
		if (((m = t[_]), (h = i(m, _)), (g = s.get(h).e), e.outrogroups !== null))
			for (let t of e.outrogroups) (t.pending.delete(g), t.done.delete(g));
		if (
			(g.f & 8192 && ($n(g), a && (g.nodes?.a?.unfix(), (d ??= new Set()).delete(g))),
			g.f & 33554432)
		)
			if (((g.f ^= he), g === c)) pi(g, null, n);
			else {
				var y = u ? u.next : c;
				(g === e.effect.last && (e.effect.last = g.prev),
					g.prev && (g.prev.next = g.next),
					g.next && (g.next.prev = g.prev),
					mi(e, u, g),
					mi(e, g, y),
					pi(g, y, n),
					(u = g),
					(f = []),
					(p = []),
					(c = ui(u.next)));
				continue;
			}
		if (g !== c) {
			if (l !== void 0 && l.has(g)) {
				if (f.length < p.length) {
					var b = p[0],
						x;
					u = b.prev;
					var S = f[0],
						ee = f[f.length - 1];
					for (x = 0; x < f.length; x += 1) pi(f[x], b, n);
					for (x = 0; x < p.length; x += 1) l.delete(p[x]);
					(mi(e, S.prev, ee.next),
						mi(e, u, S),
						mi(e, ee, b),
						(c = b),
						(u = ee),
						--_,
						(f = []),
						(p = []));
				} else
					(l.delete(g),
						pi(g, c, n),
						mi(e, g.prev, g.next),
						mi(e, g, u === null ? e.effect.first : u.next),
						mi(e, u, g),
						(u = g));
				continue;
			}
			for (f = [], p = []; c !== null && c !== g; )
				((l ??= new Set()).add(c), p.push(c), (c = ui(c.next)));
			if (c === null) continue;
		}
		(g.f & 33554432 || f.push(g), (u = g), (c = ui(g.next)));
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups)
			t.pending.size === 0 && (si(e, v(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (c !== null || l !== void 0) {
		var te = [];
		if (l !== void 0) for (g of l) g.f & 8192 || te.push(g);
		for (; c !== null; ) (!(c.f & 8192) && c !== e.fallback && te.push(c), (c = ui(c.next)));
		var ne = te.length;
		if (ne > 0) {
			var C = r & 4 && o === 0 ? n : null;
			if (a) {
				for (_ = 0; _ < ne; _ += 1) te[_].nodes?.a?.measure();
				for (_ = 0; _ < ne; _ += 1) te[_].nodes?.a?.fix();
			}
			oi(e, te, C);
		}
	}
	a &&
		st(() => {
			if (d !== void 0) for (g of d) g.nodes?.a?.apply();
		});
}
function fi(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? (o & 16 ? tn(n) : P(n, !1, !1)) : null,
		l = o & 2 ? tn(i) : null;
	return {
		v: c,
		i: l,
		e: Gn(
			() => (
				a(t, c ?? n, l ?? i, s),
				() => {
					e.delete(r);
				}
			)
		)
	};
}
function pi(e, t, n) {
	if (e.nodes)
		for (
			var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n;
			r !== null;
		) {
			var o = yn(r);
			if ((a.before(r), r === i)) return;
			r = o;
		}
}
function mi(e, t, n) {
	(t === null ? (e.effect.first = n) : (t.next = n),
		n === null ? (e.effect.last = t) : (n.prev = t));
}
function hi(e, t, n, r, i) {
	E && Je();
	var a = t.$$slots?.[n],
		o = !1;
	(a === !0 && ((a = t[n === 'default' ? `children` : n]), (o = !0)),
		a === void 0 ? i !== null && i(e) : a(e, o ? () => r : r));
}
function gi(e, t) {
	var n = void 0,
		r;
	Wn(() => {
		n !== (n = t()) &&
			((r &&= (z(r), null)),
			n &&
				(r = Gn(() => {
					Rn(() => n(e));
				})));
	});
}
function _i(e) {
	var t,
		n,
		r = ``;
	if (typeof e == `string` || typeof e == `number`) r += e;
	else if (typeof e == `object`)
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = _i(e[t])) && (r && (r += ` `), (r += n));
		} else for (n in e) e[n] && (r && (r += ` `), (r += n));
	return r;
}
function vi() {
	for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
		(e = arguments[n]) && (t = _i(e)) && (r && (r += ` `), (r += t));
	return r;
}
function yi(e) {
	return typeof e == `object` ? vi(e) : (e ?? ``);
}
var bi = [
	...` 	
\r\f\xA0\v﻿`
];
function xi(e, t, n) {
	var r = e == null ? `` : `` + e;
	if ((t && (r = r ? r + ` ` + t : t), n)) {
		for (var i of Object.keys(n))
			if (n[i]) r = r ? r + ` ` + i : i;
			else if (r.length)
				for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
					var s = o + a;
					(o === 0 || bi.includes(r[o - 1])) && (s === r.length || bi.includes(r[s]))
						? (r = (o === 0 ? `` : r.substring(0, o)) + r.substring(s + 1))
						: (o = s);
				}
	}
	return r === `` ? null : r;
}
function Si(e, t = !1) {
	var n = t ? ` !important;` : `;`,
		r = ``;
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== `` && (r += ` ` + i + `: ` + a + n);
	}
	return r;
}
function Ci(e) {
	return e[0] !== `-` || e[1] !== `-` ? e.toLowerCase() : e;
}
function wi(e, t) {
	if (t) {
		var n = ``,
			r,
			i;
		if ((Array.isArray(t) ? ((r = t[0]), (i = t[1])) : (r = t), e)) {
			e = String(e)
				.replaceAll(/\s*\/\*.*?\*\/\s*/g, ``)
				.trim();
			var a = !1,
				o = 0,
				s = !1,
				c = [];
			(r && c.push(...Object.keys(r).map(Ci)), i && c.push(...Object.keys(i).map(Ci)));
			var l = 0,
				u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (
					(s
						? f === `/` && e[d - 1] === `*` && (s = !1)
						: a
							? a === f && (a = !1)
							: f === `/` && e[d + 1] === `*`
								? (s = !0)
								: f === `"` || f === `'`
									? (a = f)
									: f === `(`
										? o++
										: f === `)` && o--,
					!s && a === !1 && o === 0)
				) {
					if (f === `:` && u === -1) u = d;
					else if (f === `;` || d === t - 1) {
						if (u !== -1) {
							var p = Ci(e.substring(l, u).trim());
							if (!c.includes(p)) {
								f !== `;` && d++;
								var m = e.substring(l, d).trim();
								n += ` ` + m + `;`;
							}
						}
						((l = d + 1), (u = -1));
					}
				}
			}
		}
		return (r && (n += Si(r)), i && (n += Si(i, !0)), (n = n.trim()), n === `` ? null : n);
	}
	return e == null ? null : String(e);
}
function Ti(e, t, n, r, i, a) {
	var o = e[we];
	if (E || o !== n || o === void 0) {
		var s = xi(n, r, a);
		((!E || s !== e.getAttribute(`class`)) &&
			(s == null ? e.removeAttribute(`class`) : t ? (e.className = s) : e.setAttribute(`class`, s)),
			(e[we] = n));
	} else if (a && i !== a)
		for (var c in a) {
			var l = !!a[c];
			(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
		}
	return a;
}
function Ei(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function Di(e, t, n, r) {
	var i = e[Te];
	if (E || i !== t) {
		var a = wi(t, r);
		((!E || a !== e.getAttribute(`style`)) &&
			(a == null ? e.removeAttribute(`style`) : (e.style.cssText = a)),
			(e[Te] = t));
	} else
		r && (Array.isArray(r) ? (Ei(e, n?.[0], r[0]), Ei(e, n?.[1], r[1], `important`)) : Ei(e, n, r));
	return r;
}
function Oi(e, t, n = !1) {
	if (e.multiple) {
		if (t == null) return;
		if (!h(t)) return We();
		for (var r of e.options) r.selected = t.includes(Ai(r));
		return;
	}
	for (r of e.options)
		if (dn(Ai(r), t)) {
			r.selected = !0;
			return;
		}
	(!n || t !== void 0) && (e.selectedIndex = -1);
}
function ki(e) {
	var t = new MutationObserver(() => {
		Oi(e, e.__value);
	});
	(t.observe(e, { childList: !0, subtree: !0, attributes: !0, attributeFilter: [`value`] }),
		Nn(() => {
			t.disconnect();
		}));
}
function Ai(e) {
	return `__value` in e ? e.__value : e.value;
}
var ji = Symbol(`class`),
	Mi = Symbol(`style`),
	Ni = Symbol(`is custom element`),
	Pi = Symbol(`is html`),
	Fi = ke ? `link` : `LINK`,
	Ii = ke ? `input` : `INPUT`,
	Li = ke ? `option` : `OPTION`,
	Ri = ke ? `select` : `SELECT`;
function zi(e) {
	if (E) {
		var t = !1,
			n = () => {
				if (!t) {
					if (((t = !0), e.hasAttribute(`value`))) {
						var n = e.value;
						(J(e, `value`, null), (e.value = n));
					}
					if (e.hasAttribute(`checked`)) {
						var r = e.checked;
						(J(e, `checked`, null), (e.checked = r));
					}
				}
			};
		((e[De] = n), st(n), Dn());
	}
}
function Bi(e, t) {
	t ? e.hasAttribute(`selected`) || e.setAttribute(`selected`, ``) : e.removeAttribute(`selected`);
}
function J(e, t, n, r) {
	var i = Wi(e);
	(E &&
		((i[t] = e.getAttribute(t)),
		t === `src` || t === `srcset` || (t === `href` && e.nodeName === Fi))) ||
		(i[t] !== (i[t] = n) &&
			(t === `loading` && (e[Se] = n),
			n == null
				? e.removeAttribute(t)
				: typeof n != `string` && Ki(e).includes(t)
					? (e[t] = n)
					: e.setAttribute(t, n)));
}
function Vi(e, t, n) {
	e.setAttributeNS(`http://www.w3.org/1999/xlink`, t, n);
}
function Hi(e, t, n, r, i = !1, a = !1) {
	if (E && i && e.nodeName === Ii) {
		var o = e;
		(o.type === `checkbox` ? `defaultChecked` : `defaultValue`) in n || zi(o);
	}
	var s = Wi(e),
		c = s[Ni],
		l = !s[Pi];
	let u = E && c;
	u && Ke(!1);
	var d = t || {},
		f = e.nodeName === Li;
	for (var m in t) m in n || (n[m] = null);
	(n.class ? (n.class = yi(n.class)) : (r || n[ji]) && (n.class = null),
		n[Mi] && (n.style ??= null));
	var h = Ki(e);
	if (e.nodeName === Ii && `type` in n && (`value` in n || `__value` in n)) {
		var g = n.type;
		(g !== d.type || (g === void 0 && e.hasAttribute(`type`))) &&
			((d.type = g), J(e, `type`, g, a));
	}
	for (let i in n) {
		let o = n[i];
		if (f && i === `value` && o == null) {
			((e.value = e.__value = ``), (d[i] = o));
			continue;
		}
		if (i === `class`) {
			(Ti(e, e.namespaceURI === `http://www.w3.org/1999/xhtml`, o, r, t?.[ji], n[ji]),
				(d[i] = o),
				(d[ji] = n[ji]));
			continue;
		}
		if (i === `style`) {
			(Di(e, o, t?.[Mi], n[Mi]), (d[i] = o), (d[Mi] = n[Mi]));
			continue;
		}
		var _ = d[i];
		if (!(o === _ && !(o === void 0 && e.hasAttribute(i)))) {
			d[i] = o;
			var v = i[0] + i[1];
			if (v !== `$$`)
				if (v === `on`) {
					let t = {},
						n = `$$` + i,
						r = i.slice(2);
					var y = Kr(r);
					if ((Wr(r) && ((r = r.slice(0, -7)), (t.capture = !0)), !y && _)) {
						if (o != null) continue;
						(e.removeEventListener(r, d[n], t), (d[n] = null));
					}
					if (y) (jr(r, e, o), Mr([r]));
					else if (o != null) {
						function a(e) {
							d[i].call(this, e);
						}
						d[n] = kr(r, e, a, t);
					}
				} else if (i === `style`) J(e, i, o);
				else if (i === `autofocus`) Tn(e, !!o);
				else if (!c && (i === `__value` || (i === `value` && o != null))) e.value = e.__value = o;
				else if (i === `selected` && f) Bi(e, o);
				else {
					var b = i;
					l || (b = Yr(b));
					var x = b === `defaultValue` || b === `defaultChecked`;
					if (o == null && !c && !x)
						if (((s[i] = null), b === `value` || b === `checked`)) {
							let n = e,
								r = t === void 0;
							if (b === `value`) {
								let e = n.defaultValue;
								(n.removeAttribute(b), (n.defaultValue = e), (n.value = n.__value = r ? e : null));
							} else {
								let e = n.defaultChecked;
								(n.removeAttribute(b), (n.defaultChecked = e), (n.checked = r ? e : !1));
							}
						} else e.removeAttribute(i);
					else
						x || (h.includes(b) && (c || typeof o != `string`))
							? ((e[b] = o), b in s && (s[b] = p))
							: typeof o != `function` && J(e, b, o, a);
				}
		}
	}
	return (u && Ke(!0), d);
}
function Ui(e, t, n = [], r = [], i = [], a, o = !1, s = !1) {
	xt(i, n, r, (n) => {
		var r = void 0,
			i = {},
			c = e.nodeName === Ri,
			l = !1;
		if (
			(Wn(() => {
				var u = t(...n.map(G)),
					d = Hi(e, r, u, a, o, s);
				l && c && `value` in u && Oi(e, u.value);
				for (let e of Object.getOwnPropertySymbols(i)) u[e] || z(i[e]);
				for (let t of Object.getOwnPropertySymbols(u)) {
					var f = u[t];
					(t.description === `@attach` &&
						(!r || f !== r[t]) &&
						(i[t] && z(i[t]), (i[t] = Gn(() => gi(e, () => f)))),
						(d[t] = f));
				}
				r = d;
			}),
			c)
		) {
			var u = e;
			Rn(() => {
				(Oi(u, r.value, !0), ki(u));
			});
		}
		l = !0;
	});
}
function Wi(e) {
	return (e[Ce] ??= { [Ni]: e.nodeName.includes(`-`), [Pi]: e.namespaceURI === m });
}
var Gi = new Map();
function Ki(e) {
	var t = e.getAttribute(`is`) || e.nodeName,
		n = Gi.get(t);
	if (n) return n;
	Gi.set(t, (n = []));
	for (var r, i = e, a = Element.prototype; a !== i; ) {
		for (var o in ((r = x(i)), r))
			r[o].set && o !== `innerHTML` && o !== `textContent` && o !== `innerText` && n.push(o);
		i = te(i);
	}
	return n;
}
function qi(e, t, n) {
	var r = b(e, t);
	r &&
		r.set &&
		((e[t] = n),
		Nn(() => {
			e[t] = null;
		}));
}
function Ji(e = !1) {
	let t = k,
		n = t.l.u;
	if (!n) return;
	let r = () => q(t.s);
	if (e) {
		let e = 0,
			n = {},
			i = Tt(() => {
				let r = !1,
					i = t.s;
				for (let e in i) i[e] !== n[e] && ((n[e] = i[e]), (r = !0));
				return (r && e++, e);
			});
		r = () => G(i);
	}
	(n.b.length &&
		In(() => {
			(Yi(t, r), ie(n.b));
		}),
		Pn(() => {
			let e = K(() => n.m.map(re));
			return () => {
				for (let t of e) typeof t == `function` && t();
			};
		}),
		n.a.length &&
			Pn(() => {
				(Yi(t, r), ie(n.a));
			}));
}
function Yi(e, t) {
	if (e.l.s) for (let t of e.l.s) G(t);
	t();
}
var Xi = {
	get(e, t) {
		if (!e.exclude.includes(t)) return (G(e.version), t in e.special ? e.special[t]() : e.props[t]);
	},
	set(e, t, n) {
		if (!(t in e.special)) {
			var r = V;
			try {
				(H(e.parent_effect),
					(e.special[t] = Y(
						{
							get [t]() {
								return e.props[t];
							}
						},
						t,
						4
					)));
			} finally {
				H(r);
			}
		}
		return (e.special[t](n), on(e.version), !0);
	},
	getOwnPropertyDescriptor(e, t) {
		if (!e.exclude.includes(t) && t in e.props)
			return { enumerable: !0, configurable: !0, value: e.props[t] };
	},
	deleteProperty(e, t) {
		return e.exclude.includes(t) ? !0 : (e.exclude.push(t), on(e.version), !0);
	},
	has(e, t) {
		return e.exclude.includes(t) ? !1 : t in e.props;
	},
	ownKeys(e) {
		return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
	}
};
function Zi(e, t) {
	return new Proxy({ props: e, exclude: t, special: {}, version: tn(0), parent_effect: V }, Xi);
}
function Y(e, t, n, r) {
	var i = !u || (n & 2) != 0,
		a = (n & 8) != 0,
		o = (n & 16) != 0,
		s = r,
		c = !0,
		l = void 0,
		d = () => (o && i ? ((l ??= Tt(r)), G(l)) : (c && ((c = !1), (s = o ? K(r) : r)), s));
	let f;
	if (a) {
		var p = be in e || xe in e;
		f = b(e, t)?.set ?? (p && t in e ? (n) => (e[t] = n) : void 0);
	}
	var m,
		h = !1;
	(a ? ([m, h] = gt(() => e[t])) : (m = e[t]),
		m === void 0 && r !== void 0 && ((m = d()), f && (i && Le(t), f(m))));
	var g = i
		? () => {
				var n = e[t];
				return n === void 0 ? d() : ((c = !0), n);
			}
		: () => {
				var n = e[t];
				return (n !== void 0 && (s = void 0), n === void 0 ? s : n);
			};
	if (i && !(n & 4)) return g;
	if (f) {
		var _ = e.$$legacy;
		return function (e, t) {
			return arguments.length > 0 ? ((!i || !t || _ || h) && f(t ? g() : e), e) : g();
		};
	}
	var v = !1,
		y = (n & 1 ? Tt : j)(() => ((v = !1), g()));
	a && G(y);
	var x = V;
	return function (e, t) {
		if (arguments.length > 0) {
			let n = t ? G(y) : i && a ? ln(e) : e;
			return (F(y, n), (v = !0), s !== void 0 && (s = n), e);
		}
		return (ir && v) || x.f & 16384 ? y.v : G(y);
	};
}
var Qi = c(
		o((e, t) => {
			(function (n, r, i) {
				typeof e == `object`
					? ((t.exports = i()), (t.exports.default = i()))
					: typeof define == `function` && define.amd
						? define(i)
						: (r[n] = i());
			})(`slugify`, e, function () {
				var e = JSON.parse(
						`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`
					),
					t = JSON.parse(
						`{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}`
					);
				function n(n, r) {
					if (typeof n != `string`) throw Error(`slugify: string argument expected`);
					r = typeof r == `string` ? { replacement: r } : r || {};
					var i = t[r.locale] || {},
						a = r.replacement === void 0 ? `-` : r.replacement,
						o = r.trim === void 0 ? !0 : r.trim,
						s = n
							.normalize()
							.split(``)
							.reduce(function (t, n) {
								var o = i[n];
								return (
									o === void 0 && (o = e[n]),
									o === void 0 && (o = n),
									o === a && (o = ` `),
									t + o.replace(r.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, ``)
								);
							}, ``);
					return (
						r.strict && (s = s.replace(/[^A-Za-z0-9\s]/g, ``)),
						o && (s = s.trim()),
						(s = s.replace(/\s+/g, a)),
						r.lower && (s = s.toLowerCase()),
						s
					);
				}
				return (
					(n.extend = function (t) {
						Object.assign(e, t);
					}),
					n
				);
			});
		})()
	),
	$i = 1440 * 60,
	ea = 2 * Math.PI;
function ta(e) {
	return ((e * ea) / $i) % ea;
}
function X(e, t, n = !1) {
	let r = e / 2,
		i = Math.sin(r) * t,
		a = Math.cos(r) * t;
	return n
		? `${i} ${-a} A ${t} ${t} 0 0 0 ${-i} ${-a}`
		: `${-i} ${-a} A ${t} ${t} 0 0 1 ${i} ${-a}`;
}
var Z = [];
for (let e = 0; e < 256; ++e) Z.push((e + 256).toString(16).slice(1));
function na(e, t = 0) {
	return (
		Z[e[t + 0]] +
		Z[e[t + 1]] +
		Z[e[t + 2]] +
		Z[e[t + 3]] +
		`-` +
		Z[e[t + 4]] +
		Z[e[t + 5]] +
		`-` +
		Z[e[t + 6]] +
		Z[e[t + 7]] +
		`-` +
		Z[e[t + 8]] +
		Z[e[t + 9]] +
		`-` +
		Z[e[t + 10]] +
		Z[e[t + 11]] +
		Z[e[t + 12]] +
		Z[e[t + 13]] +
		Z[e[t + 14]] +
		Z[e[t + 15]]
	).toLowerCase();
}
var ra = new Uint8Array(16);
function ia() {
	return crypto.getRandomValues(ra);
}
function aa(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : oa(e, t, n);
}
function oa(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? ia();
	if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
	if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
		if (((n ||= 0), n < 0 || n + 16 > t.length))
			throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return na(r);
}
var sa = Vr(
	`<g class="solar-time svelte-gt6vj2"><defs><path fill="transparent"></path></defs><text><textPath startOffset="50%" text-anchor="middle" alignment-baseline="middle"><!></textPath></text><path stroke="var(--line-color)" stroke-width="12" fill="transparent"></path></g>`
);
function ca(e, t) {
	nt(t, !1);
	let n = Y(t, `angle`, 8),
		r = Y(t, `radius`, 8),
		i = `solar-time-${aa()}`;
	Ji();
	var a = sa(),
		o = I(a),
		s = I(o);
	O(o);
	var c = L(o),
		l = I(c);
	(hi(I(l), t, `default`, {}, null), O(l), O(c));
	var u = L(c);
	(O(a),
		Hn(
			(e, t) => {
				(J(s, `id`, i), J(s, `d`, e), Vi(l, `xlink:href`, `#${i}`), J(u, `id`, i), J(u, `d`, t));
			},
			[
				() => (q(X), q(n()), q(r()), K(() => `M ${X(n(), r() * 0.96)}`)),
				() => (q(X), q(n()), q(r()), K(() => `M ${X(n(), r() * 0.92)}`))
			]
		),
		Ur(e, a),
		rt());
}
var la = Vr(
	`<g class="zodiac"><defs><path fill="transparent"></path><path fill="transparent"></path></defs><text class="zodiac__symbol svelte-17970s2"><textPath startOffset="50%" text-anchor="middle" alignment-baseline="middle"> </textPath></text><path stroke="var(--line-color)" stroke-width="8" fill="transparent"></path><path stroke="var(--line-color)" stroke-width="64" stroke-linecap="round" fill="transparent"></path><path stroke="var(--label-bg-color)" stroke-width="48" stroke-linecap="round" fill="transparent"></path><text class="zodiac__sign svelte-17970s2"><textPath startOffset="50%" text-anchor="middle" alignment-baseline="middle"> </textPath></text></g>`
);
function ua(e, t) {
	nt(t, !1);
	let n = P(),
		r = Y(t, `angle`, 8),
		i = Y(t, `radius`, 8),
		a = Y(t, `symbol`, 8),
		o = Y(t, `sign`, 8),
		s = `zodiac-symbol-${aa()}`,
		c = `zodiac-sign-${aa()}`;
	(R(
		() => q(i()),
		() => {
			F(n, i() * 0.745);
		}
	),
		zn(),
		Ji());
	var l = la(),
		u = I(l),
		d = I(u),
		f = L(d);
	O(u);
	var p = L(u),
		m = I(p),
		h = I(m, !0);
	(O(m), O(p));
	var g = L(p),
		_ = L(g),
		v = L(_),
		y = L(v),
		b = I(y),
		x = I(b, !0);
	(O(b),
		O(y),
		O(l),
		Hn(
			(e, t, n, r, i) => {
				(J(d, `id`, s),
					J(d, `d`, e),
					J(f, `id`, c),
					J(f, `d`, t),
					Vi(m, `xlink:href`, `#${s}`),
					Qr(h, a()),
					J(g, `d`, n),
					J(_, `d`, r),
					J(v, `d`, i),
					Vi(b, `xlink:href`, `#${c}`),
					Qr(x, o()));
			},
			[
				() => (q(X), q(r()), q(i()), K(() => `M ${X(r(), i() * 0.82)}`)),
				() => (q(X), q(r()), G(n), K(() => `M ${X(r(), G(n))}`)),
				() => (q(X), q(r()), G(n), K(() => `M ${X(r(), G(n))}`)),
				() => (q(X), G(n), K(() => `M ${X(0.2, G(n))}`)),
				() => (q(X), G(n), K(() => `M ${X(0.2, G(n))}`))
			]
		),
		Ur(e, l),
		rt());
}
var da = Vr(
	`<g class="numeral"><defs><path fill="transparent"></path><path fill="transparent"></path></defs><text class="numeral__symbol svelte-7sa9bs"><textPath startOffset="50%" text-anchor="middle" alignment-baseline="middle"> </textPath></text><path stroke="var(--line-color)" stroke-width="12" fill="transparent"></path><path stroke="var(--line-color)" stroke-width="62" stroke-linecap="round" fill="transparent"></path><path stroke="var(--label-bg-color)" stroke-width="52" stroke-linecap="round" fill="transparent"></path><text class="numeral__strikes svelte-7sa9bs"><textPath startOffset="50%" text-anchor="middle" alignment-baseline="middle"> </textPath></text></g>`
);
function fa(e, t) {
	nt(t, !1);
	let n = P(),
		r = Y(t, `angle`, 8),
		i = Y(t, `radius`, 8),
		a = Y(t, `numeral`, 8),
		o = Y(t, `strikes`, 8),
		s = `zodiac-symbol-${aa()}`,
		c = `zodiac-sign-${aa()}`;
	(R(
		() => q(i()),
		() => {
			F(n, i() * 0.59);
		}
	),
		zn(),
		Ji());
	var l = da(),
		u = I(l),
		d = I(u),
		f = L(d);
	O(u);
	var p = L(u),
		m = I(p),
		h = I(m, !0);
	(O(m), O(p));
	var g = L(p),
		_ = L(g),
		v = L(_),
		y = L(v),
		b = I(y),
		x = I(b, !0);
	(O(b),
		O(y),
		O(l),
		Hn(
			(e, t, n, r, i) => {
				(J(d, `id`, s),
					J(d, `d`, e),
					J(f, `id`, c),
					J(f, `d`, t),
					Vi(m, `xlink:href`, `#${s}`),
					Qr(h, a()),
					J(g, `d`, n),
					J(_, `d`, r),
					J(v, `d`, i),
					Vi(b, `xlink:href`, `#${c}`),
					Qr(x, o()));
			},
			[
				() => (q(X), q(r()), q(i()), K(() => `M ${X(r(), i() * 0.65)}`)),
				() => (q(X), q(r()), G(n), K(() => `M ${X(r(), G(n))}`)),
				() => (q(X), q(r()), G(n), K(() => `M ${X(r(), G(n))}`)),
				() => (q(X), G(n), K(() => `M ${X(0, G(n))}`)),
				() => (q(X), G(n), K(() => `M ${X(0, G(n))}`))
			]
		),
		Ur(e, l),
		rt());
}
var pa = Vr(`<path></path>`);
function ma(e, t) {
	let n = Zi(t, [`children`, `$$slots`, `$$events`, `$$legacy`]);
	nt(t, !1);
	let r = Y(t, `angle`, 8),
		i = Y(t, `radius`, 8);
	Ji();
	var a = pa();
	(Ui(
		a,
		(e) => ({ stroke: `var(--line-color)`, 'stroke-width': `8`, fill: `transparent`, ...n, d: e }),
		[() => (q(X), q(r()), q(i()), K(() => `M ${X(r(), i())}`))]
	),
		Ur(e, a),
		rt());
}
function ha(e, t, n) {
	let r = Math.sin(e) * t,
		i = Math.cos(e) * t,
		a = Math.sin(e) * n,
		o = Math.cos(e) * n;
	return `${r} ${-i} L ${a} ${-o}`;
}
var ga = Vr(`<path stroke="var(--line-color)" stroke-width="8" fill="transparent"></path>`);
function _a(e, t) {
	nt(t, !1);
	let n = Y(t, `angle`, 8),
		r = Y(t, `radius1`, 8),
		i = Y(t, `radius2`, 8);
	Ji();
	var a = ga();
	(Hn(
		(e) => J(a, `d`, e),
		[() => (q(ha), q(n()), q(r()), q(i()), K(() => `M ${ha(n(), r(), i())}`))]
	),
		Ur(e, a),
		rt());
}
var va = Vr(`<g class="ticks"><!><!><!><!><!></g>`);
function ya(e, t) {
	nt(t, !1);
	let n = P(),
		r = P(),
		i = P(),
		a = Y(t, `angle`, 8),
		o = Y(t, `radius1`, 8),
		s = Y(t, `radius2`, 8),
		c = Y(t, `amount`, 8);
	(R(
		() => (q(a()), q(c())),
		() => {
			F(n, a() / c());
		}
	),
		R(
			() => q(a()),
			() => {
				F(r, a() / 2);
			}
		),
		R(
			() => G(r),
			() => {
				F(i, -G(r));
			}
		),
		zn());
	var l = va(),
		u = I(l);
	ma(u, {
		get angle() {
			return a();
		},
		get radius() {
			return o();
		}
	});
	var d = L(u);
	ma(d, {
		get angle() {
			return a();
		},
		get radius() {
			return s();
		}
	});
	var f = L(d);
	{
		let e = j(() => -G(r));
		_a(f, {
			get angle() {
				return G(e);
			},
			get radius1() {
				return o();
			},
			get radius2() {
				return s();
			}
		});
	}
	var p = L(f);
	(_a(p, {
		get angle() {
			return G(r);
		},
		get radius1() {
			return o();
		},
		get radius2() {
			return s();
		}
	}),
		li(
			L(p),
			1,
			() => (q(c()), K(() => Array(c()))),
			ai,
			(e, t, r) => {
				{
					let t = j(() => G(i) + G(n) * r);
					_a(e, {
						get angle() {
							return G(t);
						},
						get radius1() {
							return o();
						},
						get radius2() {
							return s();
						}
					});
				}
			}
		),
		O(l),
		Ur(e, l),
		rt());
}
var ba = Vr(
	`<g><!><path class="period__background svelte-1ws4mob" stroke-width="8"></path><!><!><!></g>`
);
function xa(e, t) {
	nt(t, !1);
	let n = P(),
		r = P(),
		i = P(),
		a = Y(t, `timedPeriod`, 8),
		o = Y(t, `radius`, 8);
	(R(
		() => q(a()),
		() => {
			F(n, a().period);
		}
	),
		R(
			() => q(a()),
			() => {
				F(r, ta(a().duration));
			}
		),
		R(
			() => (q(a()), G(r)),
			() => {
				F(i, ta(a().start) + G(r) / 2 + Math.PI);
			}
		),
		zn(),
		Ji());
	var s = ba(),
		c = I(s);
	{
		let e = j(() => o() + 50);
		ya(c, {
			get angle() {
				return G(r);
			},
			get radius1() {
				return o();
			},
			get radius2() {
				return G(e);
			},
			amount: 10
		});
	}
	var l = L(c),
		u = L(l);
	ca(u, {
		get angle() {
			return G(r);
		},
		get radius() {
			return o();
		},
		children: (e, t) => {
			Ye();
			var r = Hr();
			(Hn(() => Qr(r, (G(n), K(() => G(n).solarTime)))), Ur(e, r));
		},
		$$slots: { default: !0 }
	});
	var d = L(u);
	(ua(d, {
		get angle() {
			return G(r);
		},
		get radius() {
			return o();
		},
		get symbol() {
			return (G(n), K(() => G(n).zodiacSymbol));
		},
		get sign() {
			return (G(n), K(() => G(n).zodiacSign));
		}
	}),
		fa(L(d), {
			get angle() {
				return G(r);
			},
			get radius() {
				return o();
			},
			get numeral() {
				return (G(n), K(() => G(n).japaneseNumeral));
			},
			get strikes() {
				return (G(n), K(() => G(n).strikes));
			}
		}),
		O(s),
		Hn(
			(e, t) => {
				(Ti(s, 0, e, `svelte-1ws4mob`), Di(s, `transform: rotate(${G(i)}rad);`), J(l, `d`, t));
			},
			[
				() => (q(Qi.default), G(n), K(() => `period period--${(0, Qi.default)(G(n).solarTime)}`)),
				() => (q(X), G(r), q(o()), K(() => `M ${X(G(r), o())} L ${X(G(r), o() * 0.59, !0)} Z`))
			]
		),
		Ur(e, s),
		rt());
}
var Sa = Vr(
	`<g class="hour svelte-11z1nbm"><!><!><!><!><text class="zodiac__sign"><textPath startOffset="50%" text-anchor="middle" alignment-baseline="middle" xlink:href="#time"> </textPath></text></g>`
);
function Ca(e, t) {
	nt(t, !1);
	let n = P(),
		r = Y(t, `hour`, 8),
		i = Y(t, `radius`, 8),
		a = ta(3600),
		o = a / 2;
	(R(
		() => q(r()),
		() => {
			F(n, ta(r() * 60 * 60) + a / 2 + Math.PI);
		}
	),
		zn(),
		Ji());
	var s = Sa(),
		c = I(s);
	{
		let e = j(() => i() + 100),
			t = j(() => i() + 150);
		ya(c, {
			get angle() {
				return a;
			},
			get radius1() {
				return G(e);
			},
			get radius2() {
				return G(t);
			},
			amount: 5
		});
	}
	var l = L(c);
	{
		let e = j(() => -o),
			t = j(() => i() + 100),
			n = j(() => i() + 200);
		_a(l, {
			get angle() {
				return G(e);
			},
			get radius1() {
				return G(t);
			},
			get radius2() {
				return G(n);
			}
		});
	}
	var u = L(l);
	{
		let e = j(() => i() + 100),
			t = j(() => i() + 200);
		_a(u, {
			get angle() {
				return o;
			},
			get radius1() {
				return G(e);
			},
			get radius2() {
				return G(t);
			}
		});
	}
	var d = L(u);
	{
		let e = j(() => i() + 250);
		ma(d, {
			id: `time`,
			stroke: `transparent`,
			get angle() {
				return a;
			},
			get radius() {
				return G(e);
			}
		});
	}
	var f = L(d),
		p = I(f),
		m = I(p);
	(O(p),
		O(f),
		O(s),
		Hn(() => {
			(Di(s, `transform: rotate(${G(n)}rad);`),
				Di(f, `transform: rotate(${-o}rad)`),
				Qr(m, `${r() ?? ``}:00`));
		}),
		Ur(e, s),
		rt());
}
var wa = 365.2425,
	Ta = 6048e5,
	Ea = 864e5,
	Da = 3600 * 24;
(Da * 7, ((Da * wa) / 12) * 3);
var Oa = Symbol.for(`constructDateFrom`);
function ka(e, t) {
	return typeof e == `function`
		? e(t)
		: e && typeof e == `object` && Oa in e
			? e[Oa](t)
			: e instanceof Date
				? new e.constructor(t)
				: new Date(t);
}
function Q(e, t) {
	return ka(t || e, e);
}
function Aa(e, t, n) {
	let r = Q(e, n?.in);
	return isNaN(t) ? ka(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
var ja = {};
function Ma() {
	return ja;
}
function Na(e, t) {
	let n = Ma(),
		r =
			t?.weekStartsOn ??
			t?.locale?.options?.weekStartsOn ??
			n.weekStartsOn ??
			n.locale?.options?.weekStartsOn ??
			0,
		i = Q(e, t?.in),
		a = i.getDay(),
		o = (a < r ? 7 : 0) + a - r;
	return (i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i);
}
function Pa(e, t) {
	return Na(e, { ...t, weekStartsOn: 1 });
}
function Fa(e, t) {
	let n = Q(e, t?.in),
		r = n.getFullYear(),
		i = ka(n, 0);
	(i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0));
	let a = Pa(i),
		o = ka(n, 0);
	(o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0));
	let s = Pa(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function Ia(e) {
	let t = Q(e),
		n = new Date(
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
	return (n.setUTCFullYear(t.getFullYear()), e - +n);
}
function La(e, ...t) {
	let n = ka.bind(null, e || t.find((e) => typeof e == `object`));
	return t.map(n);
}
function Ra(e, t) {
	let n = Q(e, t?.in);
	return (n.setHours(0, 0, 0, 0), n);
}
function za(e, t, n) {
	let [r, i] = La(n?.in, e, t),
		a = Ra(r),
		o = Ra(i),
		s = +a - Ia(a),
		c = +o - Ia(o);
	return Math.round((s - c) / Ea);
}
function Ba(e, t) {
	let n = Fa(e, t),
		r = ka(t?.in || e, 0);
	return (r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Pa(r));
}
function Va(e) {
	return (
		e instanceof Date ||
		(typeof e == `object` && Object.prototype.toString.call(e) === `[object Date]`)
	);
}
function Ha(e) {
	return !((!Va(e) && typeof e != `number`) || isNaN(+Q(e)));
}
function Ua(e) {
	return (t) => {
		let n = (e ? Math[e] : Math.trunc)(t);
		return n === 0 ? 0 : n;
	};
}
function Wa(e, t) {
	return Q(e) - +Q(t);
}
function Ga(e, t, n) {
	let r = Wa(e, t) / 1e3;
	return Ua(n?.roundingMethod)(r);
}
function Ka(e, t) {
	let n = Q(e, t?.in);
	return (n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n);
}
var qa = {
		lessThanXSeconds: { one: `less than a second`, other: `less than {{count}} seconds` },
		xSeconds: { one: `1 second`, other: `{{count}} seconds` },
		halfAMinute: `half a minute`,
		lessThanXMinutes: { one: `less than a minute`, other: `less than {{count}} minutes` },
		xMinutes: { one: `1 minute`, other: `{{count}} minutes` },
		aboutXHours: { one: `about 1 hour`, other: `about {{count}} hours` },
		xHours: { one: `1 hour`, other: `{{count}} hours` },
		xDays: { one: `1 day`, other: `{{count}} days` },
		aboutXWeeks: { one: `about 1 week`, other: `about {{count}} weeks` },
		xWeeks: { one: `1 week`, other: `{{count}} weeks` },
		aboutXMonths: { one: `about 1 month`, other: `about {{count}} months` },
		xMonths: { one: `1 month`, other: `{{count}} months` },
		aboutXYears: { one: `about 1 year`, other: `about {{count}} years` },
		xYears: { one: `1 year`, other: `{{count}} years` },
		overXYears: { one: `over 1 year`, other: `over {{count}} years` },
		almostXYears: { one: `almost 1 year`, other: `almost {{count}} years` }
	},
	Ja = (e, t, n) => {
		let r,
			i = qa[e];
		return (
			(r = typeof i == `string` ? i : t === 1 ? i.one : i.other.replace(`{{count}}`, t.toString())),
			n?.addSuffix ? (n.comparison && n.comparison > 0 ? `in ` + r : r + ` ago`) : r
		);
	};
function Ya(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var Xa = {
		date: Ya({
			formats: {
				full: `EEEE, MMMM do, y`,
				long: `MMMM do, y`,
				medium: `MMM d, y`,
				short: `MM/dd/yyyy`
			},
			defaultWidth: `full`
		}),
		time: Ya({
			formats: {
				full: `h:mm:ss a zzzz`,
				long: `h:mm:ss a z`,
				medium: `h:mm:ss a`,
				short: `h:mm a`
			},
			defaultWidth: `full`
		}),
		dateTime: Ya({
			formats: {
				full: `{{date}} 'at' {{time}}`,
				long: `{{date}} 'at' {{time}}`,
				medium: `{{date}}, {{time}}`,
				short: `{{date}}, {{time}}`
			},
			defaultWidth: `full`
		})
	},
	Za = {
		lastWeek: `'last' eeee 'at' p`,
		yesterday: `'yesterday at' p`,
		today: `'today at' p`,
		tomorrow: `'tomorrow at' p`,
		nextWeek: `eeee 'at' p`,
		other: `P`
	},
	Qa = (e, t, n, r) => Za[e];
function $a(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : `standalone`,
			i;
		if (r === `formatting` && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth,
				r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth,
				r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var eo = {
	ordinalNumber: (e, t) => {
		let n = Number(e),
			r = n % 100;
		if (r > 20 || r < 10)
			switch (r % 10) {
				case 1:
					return n + `st`;
				case 2:
					return n + `nd`;
				case 3:
					return n + `rd`;
			}
		return n + `th`;
	},
	era: $a({
		values: {
			narrow: [`B`, `A`],
			abbreviated: [`BC`, `AD`],
			wide: [`Before Christ`, `Anno Domini`]
		},
		defaultWidth: `wide`
	}),
	quarter: $a({
		values: {
			narrow: [`1`, `2`, `3`, `4`],
			abbreviated: [`Q1`, `Q2`, `Q3`, `Q4`],
			wide: [`1st quarter`, `2nd quarter`, `3rd quarter`, `4th quarter`]
		},
		defaultWidth: `wide`,
		argumentCallback: (e) => e - 1
	}),
	month: $a({
		values: {
			narrow: [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`],
			abbreviated: [
				`Jan`,
				`Feb`,
				`Mar`,
				`Apr`,
				`May`,
				`Jun`,
				`Jul`,
				`Aug`,
				`Sep`,
				`Oct`,
				`Nov`,
				`Dec`
			],
			wide: [
				`January`,
				`February`,
				`March`,
				`April`,
				`May`,
				`June`,
				`July`,
				`August`,
				`September`,
				`October`,
				`November`,
				`December`
			]
		},
		defaultWidth: `wide`
	}),
	day: $a({
		values: {
			narrow: [`S`, `M`, `T`, `W`, `T`, `F`, `S`],
			short: [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`],
			abbreviated: [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`],
			wide: [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]
		},
		defaultWidth: `wide`
	}),
	dayPeriod: $a({
		values: {
			narrow: {
				am: `a`,
				pm: `p`,
				midnight: `mi`,
				noon: `n`,
				morning: `morning`,
				afternoon: `afternoon`,
				evening: `evening`,
				night: `night`
			},
			abbreviated: {
				am: `AM`,
				pm: `PM`,
				midnight: `midnight`,
				noon: `noon`,
				morning: `morning`,
				afternoon: `afternoon`,
				evening: `evening`,
				night: `night`
			},
			wide: {
				am: `a.m.`,
				pm: `p.m.`,
				midnight: `midnight`,
				noon: `noon`,
				morning: `morning`,
				afternoon: `afternoon`,
				evening: `evening`,
				night: `night`
			}
		},
		defaultWidth: `wide`,
		formattingValues: {
			narrow: {
				am: `a`,
				pm: `p`,
				midnight: `mi`,
				noon: `n`,
				morning: `in the morning`,
				afternoon: `in the afternoon`,
				evening: `in the evening`,
				night: `at night`
			},
			abbreviated: {
				am: `AM`,
				pm: `PM`,
				midnight: `midnight`,
				noon: `noon`,
				morning: `in the morning`,
				afternoon: `in the afternoon`,
				evening: `in the evening`,
				night: `at night`
			},
			wide: {
				am: `a.m.`,
				pm: `p.m.`,
				midnight: `midnight`,
				noon: `noon`,
				morning: `in the morning`,
				afternoon: `in the afternoon`,
				evening: `in the evening`,
				night: `at night`
			}
		},
		defaultFormattingWidth: `wide`
	})
};
function to(e) {
	return (t, n = {}) => {
		let r = n.width,
			i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
			a = t.match(i);
		if (!a) return null;
		let o = a[0],
			s = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
			c = Array.isArray(s) ? ro(s, (e) => e.test(o)) : no(s, (e) => e.test(o)),
			l;
		((l = e.valueCallback ? e.valueCallback(c) : c),
			(l = n.valueCallback ? n.valueCallback(l) : l));
		let u = t.slice(o.length);
		return { value: l, rest: u };
	};
}
function no(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function ro(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function io(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0],
			a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return { value: o, rest: s };
	};
}
var ao = {
	code: `en-US`,
	formatDistance: Ja,
	formatLong: Xa,
	formatRelative: Qa,
	localize: eo,
	match: {
		ordinalNumber: io({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: to({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: `wide`,
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: `any`
		}),
		quarter: to({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: `wide`,
			parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
			defaultParseWidth: `any`,
			valueCallback: (e) => e + 1
		}),
		month: to({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: `wide`,
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
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
			defaultParseWidth: `any`
		}),
		day: to({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: `wide`,
			parsePatterns: {
				narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
				any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
			},
			defaultParseWidth: `any`
		}),
		dayPeriod: to({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: `any`,
			parsePatterns: {
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
			defaultParseWidth: `any`
		})
	},
	options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
};
function oo(e, t) {
	let n = Q(e, t?.in);
	return za(n, Ka(n)) + 1;
}
function so(e, t) {
	let n = Q(e, t?.in),
		r = Pa(n) - +Ba(n);
	return Math.round(r / Ta) + 1;
}
function co(e, t) {
	let n = Q(e, t?.in),
		r = n.getFullYear(),
		i = Ma(),
		a =
			t?.firstWeekContainsDate ??
			t?.locale?.options?.firstWeekContainsDate ??
			i.firstWeekContainsDate ??
			i.locale?.options?.firstWeekContainsDate ??
			1,
		o = ka(t?.in || e, 0);
	(o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0));
	let s = Na(o, t),
		c = ka(t?.in || e, 0);
	(c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0));
	let l = Na(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
function lo(e, t) {
	let n = Ma(),
		r =
			t?.firstWeekContainsDate ??
			t?.locale?.options?.firstWeekContainsDate ??
			n.firstWeekContainsDate ??
			n.locale?.options?.firstWeekContainsDate ??
			1,
		i = co(e, t),
		a = ka(t?.in || e, 0);
	return (a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Na(a, t));
}
function uo(e, t) {
	let n = Q(e, t?.in),
		r = Na(n, t) - +lo(n, t);
	return Math.round(r / Ta) + 1;
}
function $(e, t) {
	return (e < 0 ? `-` : ``) + Math.abs(e).toString().padStart(t, `0`);
}
var fo = {
		y(e, t) {
			let n = e.getFullYear(),
				r = n > 0 ? n : 1 - n;
			return $(t === `yy` ? r % 100 : r, t.length);
		},
		M(e, t) {
			let n = e.getMonth();
			return t === `M` ? String(n + 1) : $(n + 1, 2);
		},
		d(e, t) {
			return $(e.getDate(), t.length);
		},
		a(e, t) {
			let n = e.getHours() / 12 >= 1 ? `pm` : `am`;
			switch (t) {
				case `a`:
				case `aa`:
					return n.toUpperCase();
				case `aaa`:
					return n;
				case `aaaaa`:
					return n[0];
				default:
					return n === `am` ? `a.m.` : `p.m.`;
			}
		},
		h(e, t) {
			return $(e.getHours() % 12 || 12, t.length);
		},
		H(e, t) {
			return $(e.getHours(), t.length);
		},
		m(e, t) {
			return $(e.getMinutes(), t.length);
		},
		s(e, t) {
			return $(e.getSeconds(), t.length);
		},
		S(e, t) {
			let n = t.length,
				r = e.getMilliseconds();
			return $(Math.trunc(r * 10 ** (n - 3)), t.length);
		}
	},
	po = {
		am: `am`,
		pm: `pm`,
		midnight: `midnight`,
		noon: `noon`,
		morning: `morning`,
		afternoon: `afternoon`,
		evening: `evening`,
		night: `night`
	},
	mo = {
		G: function (e, t, n) {
			let r = +(e.getFullYear() > 0);
			switch (t) {
				case `G`:
				case `GG`:
				case `GGG`:
					return n.era(r, { width: `abbreviated` });
				case `GGGGG`:
					return n.era(r, { width: `narrow` });
				default:
					return n.era(r, { width: `wide` });
			}
		},
		y: function (e, t, n) {
			if (t === `yo`) {
				let t = e.getFullYear(),
					r = t > 0 ? t : 1 - t;
				return n.ordinalNumber(r, { unit: `year` });
			}
			return fo.y(e, t);
		},
		Y: function (e, t, n, r) {
			let i = co(e, r),
				a = i > 0 ? i : 1 - i;
			return t === `YY`
				? $(a % 100, 2)
				: t === `Yo`
					? n.ordinalNumber(a, { unit: `year` })
					: $(a, t.length);
		},
		R: function (e, t) {
			return $(Fa(e), t.length);
		},
		u: function (e, t) {
			return $(e.getFullYear(), t.length);
		},
		Q: function (e, t, n) {
			let r = Math.ceil((e.getMonth() + 1) / 3);
			switch (t) {
				case `Q`:
					return String(r);
				case `QQ`:
					return $(r, 2);
				case `Qo`:
					return n.ordinalNumber(r, { unit: `quarter` });
				case `QQQ`:
					return n.quarter(r, { width: `abbreviated`, context: `formatting` });
				case `QQQQQ`:
					return n.quarter(r, { width: `narrow`, context: `formatting` });
				default:
					return n.quarter(r, { width: `wide`, context: `formatting` });
			}
		},
		q: function (e, t, n) {
			let r = Math.ceil((e.getMonth() + 1) / 3);
			switch (t) {
				case `q`:
					return String(r);
				case `qq`:
					return $(r, 2);
				case `qo`:
					return n.ordinalNumber(r, { unit: `quarter` });
				case `qqq`:
					return n.quarter(r, { width: `abbreviated`, context: `standalone` });
				case `qqqqq`:
					return n.quarter(r, { width: `narrow`, context: `standalone` });
				default:
					return n.quarter(r, { width: `wide`, context: `standalone` });
			}
		},
		M: function (e, t, n) {
			let r = e.getMonth();
			switch (t) {
				case `M`:
				case `MM`:
					return fo.M(e, t);
				case `Mo`:
					return n.ordinalNumber(r + 1, { unit: `month` });
				case `MMM`:
					return n.month(r, { width: `abbreviated`, context: `formatting` });
				case `MMMMM`:
					return n.month(r, { width: `narrow`, context: `formatting` });
				default:
					return n.month(r, { width: `wide`, context: `formatting` });
			}
		},
		L: function (e, t, n) {
			let r = e.getMonth();
			switch (t) {
				case `L`:
					return String(r + 1);
				case `LL`:
					return $(r + 1, 2);
				case `Lo`:
					return n.ordinalNumber(r + 1, { unit: `month` });
				case `LLL`:
					return n.month(r, { width: `abbreviated`, context: `standalone` });
				case `LLLLL`:
					return n.month(r, { width: `narrow`, context: `standalone` });
				default:
					return n.month(r, { width: `wide`, context: `standalone` });
			}
		},
		w: function (e, t, n, r) {
			let i = uo(e, r);
			return t === `wo` ? n.ordinalNumber(i, { unit: `week` }) : $(i, t.length);
		},
		I: function (e, t, n) {
			let r = so(e);
			return t === `Io` ? n.ordinalNumber(r, { unit: `week` }) : $(r, t.length);
		},
		d: function (e, t, n) {
			return t === `do` ? n.ordinalNumber(e.getDate(), { unit: `date` }) : fo.d(e, t);
		},
		D: function (e, t, n) {
			let r = oo(e);
			return t === `Do` ? n.ordinalNumber(r, { unit: `dayOfYear` }) : $(r, t.length);
		},
		E: function (e, t, n) {
			let r = e.getDay();
			switch (t) {
				case `E`:
				case `EE`:
				case `EEE`:
					return n.day(r, { width: `abbreviated`, context: `formatting` });
				case `EEEEE`:
					return n.day(r, { width: `narrow`, context: `formatting` });
				case `EEEEEE`:
					return n.day(r, { width: `short`, context: `formatting` });
				default:
					return n.day(r, { width: `wide`, context: `formatting` });
			}
		},
		e: function (e, t, n, r) {
			let i = e.getDay(),
				a = (i - r.weekStartsOn + 8) % 7 || 7;
			switch (t) {
				case `e`:
					return String(a);
				case `ee`:
					return $(a, 2);
				case `eo`:
					return n.ordinalNumber(a, { unit: `day` });
				case `eee`:
					return n.day(i, { width: `abbreviated`, context: `formatting` });
				case `eeeee`:
					return n.day(i, { width: `narrow`, context: `formatting` });
				case `eeeeee`:
					return n.day(i, { width: `short`, context: `formatting` });
				default:
					return n.day(i, { width: `wide`, context: `formatting` });
			}
		},
		c: function (e, t, n, r) {
			let i = e.getDay(),
				a = (i - r.weekStartsOn + 8) % 7 || 7;
			switch (t) {
				case `c`:
					return String(a);
				case `cc`:
					return $(a, t.length);
				case `co`:
					return n.ordinalNumber(a, { unit: `day` });
				case `ccc`:
					return n.day(i, { width: `abbreviated`, context: `standalone` });
				case `ccccc`:
					return n.day(i, { width: `narrow`, context: `standalone` });
				case `cccccc`:
					return n.day(i, { width: `short`, context: `standalone` });
				default:
					return n.day(i, { width: `wide`, context: `standalone` });
			}
		},
		i: function (e, t, n) {
			let r = e.getDay(),
				i = r === 0 ? 7 : r;
			switch (t) {
				case `i`:
					return String(i);
				case `ii`:
					return $(i, t.length);
				case `io`:
					return n.ordinalNumber(i, { unit: `day` });
				case `iii`:
					return n.day(r, { width: `abbreviated`, context: `formatting` });
				case `iiiii`:
					return n.day(r, { width: `narrow`, context: `formatting` });
				case `iiiiii`:
					return n.day(r, { width: `short`, context: `formatting` });
				default:
					return n.day(r, { width: `wide`, context: `formatting` });
			}
		},
		a: function (e, t, n) {
			let r = e.getHours() / 12 >= 1 ? `pm` : `am`;
			switch (t) {
				case `a`:
				case `aa`:
					return n.dayPeriod(r, { width: `abbreviated`, context: `formatting` });
				case `aaa`:
					return n.dayPeriod(r, { width: `abbreviated`, context: `formatting` }).toLowerCase();
				case `aaaaa`:
					return n.dayPeriod(r, { width: `narrow`, context: `formatting` });
				default:
					return n.dayPeriod(r, { width: `wide`, context: `formatting` });
			}
		},
		b: function (e, t, n) {
			let r = e.getHours(),
				i;
			switch (((i = r === 12 ? po.noon : r === 0 ? po.midnight : r / 12 >= 1 ? `pm` : `am`), t)) {
				case `b`:
				case `bb`:
					return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` });
				case `bbb`:
					return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` }).toLowerCase();
				case `bbbbb`:
					return n.dayPeriod(i, { width: `narrow`, context: `formatting` });
				default:
					return n.dayPeriod(i, { width: `wide`, context: `formatting` });
			}
		},
		B: function (e, t, n) {
			let r = e.getHours(),
				i;
			switch (
				((i = r >= 17 ? po.evening : r >= 12 ? po.afternoon : r >= 4 ? po.morning : po.night), t)
			) {
				case `B`:
				case `BB`:
				case `BBB`:
					return n.dayPeriod(i, { width: `abbreviated`, context: `formatting` });
				case `BBBBB`:
					return n.dayPeriod(i, { width: `narrow`, context: `formatting` });
				default:
					return n.dayPeriod(i, { width: `wide`, context: `formatting` });
			}
		},
		h: function (e, t, n) {
			if (t === `ho`) {
				let t = e.getHours() % 12;
				return (t === 0 && (t = 12), n.ordinalNumber(t, { unit: `hour` }));
			}
			return fo.h(e, t);
		},
		H: function (e, t, n) {
			return t === `Ho` ? n.ordinalNumber(e.getHours(), { unit: `hour` }) : fo.H(e, t);
		},
		K: function (e, t, n) {
			let r = e.getHours() % 12;
			return t === `Ko` ? n.ordinalNumber(r, { unit: `hour` }) : $(r, t.length);
		},
		k: function (e, t, n) {
			let r = e.getHours();
			return (
				r === 0 && (r = 24),
				t === `ko` ? n.ordinalNumber(r, { unit: `hour` }) : $(r, t.length)
			);
		},
		m: function (e, t, n) {
			return t === `mo` ? n.ordinalNumber(e.getMinutes(), { unit: `minute` }) : fo.m(e, t);
		},
		s: function (e, t, n) {
			return t === `so` ? n.ordinalNumber(e.getSeconds(), { unit: `second` }) : fo.s(e, t);
		},
		S: function (e, t) {
			return fo.S(e, t);
		},
		X: function (e, t, n) {
			let r = e.getTimezoneOffset();
			if (r === 0) return `Z`;
			switch (t) {
				case `X`:
					return go(r);
				case `XXXX`:
				case `XX`:
					return _o(r);
				default:
					return _o(r, `:`);
			}
		},
		x: function (e, t, n) {
			let r = e.getTimezoneOffset();
			switch (t) {
				case `x`:
					return go(r);
				case `xxxx`:
				case `xx`:
					return _o(r);
				default:
					return _o(r, `:`);
			}
		},
		O: function (e, t, n) {
			let r = e.getTimezoneOffset();
			switch (t) {
				case `O`:
				case `OO`:
				case `OOO`:
					return `GMT` + ho(r, `:`);
				default:
					return `GMT` + _o(r, `:`);
			}
		},
		z: function (e, t, n) {
			let r = e.getTimezoneOffset();
			switch (t) {
				case `z`:
				case `zz`:
				case `zzz`:
					return `GMT` + ho(r, `:`);
				default:
					return `GMT` + _o(r, `:`);
			}
		},
		t: function (e, t, n) {
			return $(Math.trunc(e / 1e3), t.length);
		},
		T: function (e, t, n) {
			return $(+e, t.length);
		}
	};
function ho(e, t = ``) {
	let n = e > 0 ? `-` : `+`,
		r = Math.abs(e),
		i = Math.trunc(r / 60),
		a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + $(a, 2);
}
function go(e, t) {
	return e % 60 == 0 ? (e > 0 ? `-` : `+`) + $(Math.abs(e) / 60, 2) : _o(e, t);
}
function _o(e, t = ``) {
	let n = e > 0 ? `-` : `+`,
		r = Math.abs(e),
		i = $(Math.trunc(r / 60), 2),
		a = $(r % 60, 2);
	return n + i + t + a;
}
var vo = (e, t) => {
		switch (e) {
			case `P`:
				return t.date({ width: `short` });
			case `PP`:
				return t.date({ width: `medium` });
			case `PPP`:
				return t.date({ width: `long` });
			default:
				return t.date({ width: `full` });
		}
	},
	yo = (e, t) => {
		switch (e) {
			case `p`:
				return t.time({ width: `short` });
			case `pp`:
				return t.time({ width: `medium` });
			case `ppp`:
				return t.time({ width: `long` });
			default:
				return t.time({ width: `full` });
		}
	},
	bo = {
		p: yo,
		P: (e, t) => {
			let n = e.match(/(P+)(p+)?/) || [],
				r = n[1],
				i = n[2];
			if (!i) return vo(e, t);
			let a;
			switch (r) {
				case `P`:
					a = t.dateTime({ width: `short` });
					break;
				case `PP`:
					a = t.dateTime({ width: `medium` });
					break;
				case `PPP`:
					a = t.dateTime({ width: `long` });
					break;
				default:
					a = t.dateTime({ width: `full` });
					break;
			}
			return a.replace(`{{date}}`, vo(r, t)).replace(`{{time}}`, yo(i, t));
		}
	},
	xo = /^D+$/,
	So = /^Y+$/,
	Co = [`D`, `DD`, `YY`, `YYYY`];
function wo(e) {
	return xo.test(e);
}
function To(e) {
	return So.test(e);
}
function Eo(e, t, n) {
	let r = Do(e, t, n);
	if ((console.warn(r), Co.includes(e))) throw RangeError(r);
}
function Do(e, t, n) {
	let r = e[0] === `Y` ? `years` : `days of the month`;
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
var Oo = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
	ko = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
	Ao = /^'([^]*?)'?$/,
	jo = /''/g,
	Mo = /[a-zA-Z]/;
function No(e, t, n) {
	let r = Ma(),
		i = n?.locale ?? r.locale ?? ao,
		a =
			n?.firstWeekContainsDate ??
			n?.locale?.options?.firstWeekContainsDate ??
			r.firstWeekContainsDate ??
			r.locale?.options?.firstWeekContainsDate ??
			1,
		o =
			n?.weekStartsOn ??
			n?.locale?.options?.weekStartsOn ??
			r.weekStartsOn ??
			r.locale?.options?.weekStartsOn ??
			0,
		s = Q(e, n?.in);
	if (!Ha(s)) throw RangeError(`Invalid time value`);
	let c = t
		.match(ko)
		.map((e) => {
			let t = e[0];
			if (t === `p` || t === `P`) {
				let n = bo[t];
				return n(e, i.formatLong);
			}
			return e;
		})
		.join(``)
		.match(Oo)
		.map((e) => {
			if (e === `''`) return { isToken: !1, value: `'` };
			let t = e[0];
			if (t === `'`) return { isToken: !1, value: Po(e) };
			if (mo[t]) return { isToken: !0, value: e };
			if (t.match(Mo))
				throw RangeError(
					'Format string contains an unescaped latin alphabet character `' + t + '`'
				);
			return { isToken: !1, value: e };
		});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = { firstWeekContainsDate: a, weekStartsOn: o, locale: i };
	return c
		.map((r) => {
			if (!r.isToken) return r.value;
			let a = r.value;
			((!n?.useAdditionalWeekYearTokens && To(a)) || (!n?.useAdditionalDayOfYearTokens && wo(a))) &&
				Eo(a, t, String(e));
			let o = mo[a[0]];
			return o(s, a, i.localize, l);
		})
		.join(``);
}
function Po(e) {
	let t = e.match(Ao);
	return t ? t[1].replace(jo, `'`) : e;
}
function Fo(e, t) {
	let n = Q(e, t?.in),
		r = n.getFullYear(),
		i = n.getMonth(),
		a = ka(n, 0);
	return (a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate());
}
function Io(e, t, n) {
	let r = Q(e, n?.in),
		i = r.getFullYear(),
		a = r.getDate(),
		o = ka(n?.in || e, 0);
	(o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0));
	let s = Fo(o);
	return (r.setMonth(t, Math.min(a, s)), r);
}
function Lo(e, t, n) {
	let r = Q(e, n?.in);
	return isNaN(+r)
		? ka(n?.in || e, NaN)
		: (t.year != null && r.setFullYear(t.year),
			t.month != null && (r = Io(r, t.month)),
			t.date != null && r.setDate(t.date),
			t.hours != null && r.setHours(t.hours),
			t.minutes != null && r.setMinutes(t.minutes),
			t.seconds != null && r.setSeconds(t.seconds),
			t.milliseconds != null && r.setMilliseconds(t.milliseconds),
			r);
}
function Ro(e) {
	return Lo(e, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
}
function zo(e) {
	return ta(Ga(e, Ro(e)));
}
var Bo = Vr(
	`<g class="hand"><line stroke="var(--hand-color)" stroke-width="75" x1="0" x2="0" y1="0" y2="-500"></line><circle fill="var(--hand-color)" r="300"></circle><circle fill="var(--page-bg-color)" r="250"></circle><path fill="var(--hand-color)"></path><path fill="var(--hand-color)" d="M 0 -650 L 100 -400 L 0 -500 L -100 -400 Z"></path><path fill="var(--hand-color)" d="M 0 -1480 L 50 -1575 L 0 -1550 L -50 -1575 Z"></path></g><text class="hand__time svelte-1v7leuj" text-anchor="middle" alignment-baseline="middle"> </text>`,
	1
);
function Vo(e, t) {
	nt(t, !1);
	let n = P(),
		r = Y(t, `time`, 8),
		i = Y(t, `radius`, 8);
	(R(
		() => q(r()),
		() => {
			F(n, zo(r()) + Math.PI);
		}
	),
		zn(),
		Ji());
	var a = Bo(),
		o = bn(a),
		s = L(I(o), 3);
	(Ye(2), O(o));
	var c = L(o),
		l = I(c, !0);
	(O(c),
		Hn(
			(e) => {
				(Di(o, `transform: rotate(${G(n)}rad);`),
					J(s, `d`, `M 0 -${i() + 125} L 50 -${i() + 75} L 0 -${i() + 25} L -50 -${i() + 75} Z`),
					Qr(l, e));
			},
			[() => (q(No), q(r()), K(() => No(r(), `HH:mm:ss`)))]
		),
		Ur(e, a),
		rt());
}
var Ho = c(
	o((e, t) => {
		(function () {
			var n = Math.PI,
				r = Math.sin,
				i = Math.cos,
				a = Math.tan,
				o = Math.asin,
				s = Math.atan2,
				c = Math.acos,
				l = n / 180,
				u = 1e3 * 60 * 60 * 24,
				d = 2440588,
				f = 2451545;
			function p(e) {
				return e.valueOf() / u - 0.5 + d;
			}
			function m(e) {
				return new Date((e + 0.5 - d) * u);
			}
			function h(e) {
				return p(e) - f;
			}
			var g = l * 23.4397;
			function _(e, t) {
				return s(r(e) * i(g) - a(t) * r(g), i(e));
			}
			function v(e, t) {
				return o(r(t) * i(g) + i(t) * r(g) * r(e));
			}
			function y(e, t, n) {
				return s(r(e), i(e) * r(t) - a(n) * i(t));
			}
			function b(e, t, n) {
				return o(r(t) * r(n) + i(t) * i(n) * i(e));
			}
			function x(e, t) {
				return l * (280.16 + 360.9856235 * e) - t;
			}
			function S(e) {
				return (e < 0 && (e = 0), 2967e-7 / Math.tan(e + 0.00312536 / (e + 0.08901179)));
			}
			function ee(e) {
				return l * (357.5291 + 0.98560028 * e);
			}
			function te(e) {
				var t = l * (1.9148 * r(e) + 0.02 * r(2 * e) + 3e-4 * r(3 * e)),
					i = l * 102.9372;
				return e + t + i + n;
			}
			function ne(e) {
				var t = te(ee(e));
				return { dec: v(t, 0), ra: _(t, 0) };
			}
			var C = {};
			C.getPosition = function (e, t, n) {
				var r = l * -n,
					i = l * t,
					a = h(e),
					o = ne(a),
					s = x(a, r) - o.ra;
				return { azimuth: y(s, i, o.dec), altitude: b(s, i, o.dec) };
			};
			var re = (C.times = [
				[-0.833, `sunrise`, `sunset`],
				[-0.3, `sunriseEnd`, `sunsetStart`],
				[-6, `dawn`, `dusk`],
				[-12, `nauticalDawn`, `nauticalDusk`],
				[-18, `nightEnd`, `night`],
				[6, `goldenHourEnd`, `goldenHour`]
			]);
			C.addTime = function (e, t, n) {
				re.push([e, t, n]);
			};
			var ie = 9e-4;
			function ae(e, t) {
				return Math.round(e - ie - t / (2 * n));
			}
			function oe(e, t, r) {
				return ie + (e + t) / (2 * n) + r;
			}
			function w(e, t, n) {
				return f + e + 0.0053 * r(t) - 0.0069 * r(2 * n);
			}
			function T(e, t, n) {
				return c((r(e) - r(t) * r(n)) / (i(t) * i(n)));
			}
			function se(e) {
				return (-2.076 * Math.sqrt(e)) / 60;
			}
			function ce(e, t, n, r, i, a, o) {
				return w(oe(T(e, n, r), t, i), a, o);
			}
			C.getTimes = function (e, t, n, r) {
				r ||= 0;
				var i = l * -n,
					a = l * t,
					o = se(r),
					s = ae(h(e), i),
					c = oe(0, i, s),
					u = ee(c),
					d = te(u),
					f = v(d, 0),
					p = w(c, u, d),
					g,
					_,
					y,
					b,
					x,
					S,
					ne = { solarNoon: m(p), nadir: m(p - 0.5) };
				for (g = 0, _ = re.length; g < _; g += 1)
					((y = re[g]),
						(b = (y[0] + o) * l),
						(x = ce(b, i, a, f, s, u, d)),
						(S = p - (x - p)),
						(ne[y[1]] = m(S)),
						(ne[y[2]] = m(x)));
				return ne;
			};
			function le(e) {
				var t = l * (218.316 + 13.176396 * e),
					n = l * (134.963 + 13.064993 * e),
					a = l * (93.272 + 13.22935 * e),
					o = t + l * 6.289 * r(n),
					s = l * 5.128 * r(a),
					c = 385001 - 20905 * i(n);
				return { ra: _(o, s), dec: v(o, s), dist: c };
			}
			((C.getMoonPosition = function (e, t, n) {
				var o = l * -n,
					c = l * t,
					u = h(e),
					d = le(u),
					f = x(u, o) - d.ra,
					p = b(f, c, d.dec),
					m = s(r(f), a(c) * i(d.dec) - r(d.dec) * i(f));
				return (
					(p += S(p)),
					{ azimuth: y(f, c, d.dec), altitude: p, distance: d.dist, parallacticAngle: m }
				);
			}),
				(C.getMoonIllumination = function (e) {
					var t = h(e || new Date()),
						n = ne(t),
						a = le(t),
						o = 149598e3,
						l = c(r(n.dec) * r(a.dec) + i(n.dec) * i(a.dec) * i(n.ra - a.ra)),
						u = s(o * r(l), a.dist - o * i(l)),
						d = s(
							i(n.dec) * r(n.ra - a.ra),
							r(n.dec) * i(a.dec) - i(n.dec) * r(a.dec) * i(n.ra - a.ra)
						);
					return {
						fraction: (1 + i(u)) / 2,
						phase: 0.5 + (0.5 * u * (d < 0 ? -1 : 1)) / Math.PI,
						angle: d
					};
				}));
			function ue(e, t) {
				return new Date(e.valueOf() + (t * u) / 24);
			}
			((C.getMoonTimes = function (e, t, n, r) {
				var i = new Date(e);
				r ? i.setUTCHours(0, 0, 0, 0) : i.setHours(0, 0, 0, 0);
				for (
					var a = 0.133 * l,
						o = C.getMoonPosition(i, t, n).altitude - a,
						s,
						c,
						u,
						d,
						f,
						p,
						m,
						h,
						g,
						_,
						v,
						y,
						b,
						x = 1;
					x <= 24 &&
					((s = C.getMoonPosition(ue(i, x), t, n).altitude - a),
					(c = C.getMoonPosition(ue(i, x + 1), t, n).altitude - a),
					(f = (o + c) / 2 - s),
					(p = (c - o) / 2),
					(m = -p / (2 * f)),
					(h = (f * m + p) * m + s),
					(g = p * p - 4 * f * s),
					(_ = 0),
					g >= 0 &&
						((b = Math.sqrt(g) / (Math.abs(f) * 2)),
						(v = m - b),
						(y = m + b),
						Math.abs(v) <= 1 && _++,
						Math.abs(y) <= 1 && _++,
						v < -1 && (v = y)),
					_ === 1
						? o < 0
							? (u = x + v)
							: (d = x + v)
						: _ === 2 && ((u = x + (h < 0 ? y : v)), (d = x + (h < 0 ? v : y))),
					!(u && d));
					x += 2
				)
					o = c;
				var S = {};
				return (
					u && (S.rise = ue(i, u)),
					d && (S.set = ue(i, d)),
					!u && !d && (S[h > 0 ? `alwaysUp` : `alwaysDown`] = !0),
					S
				);
			}),
				typeof e == `object` && t !== void 0
					? (t.exports = C)
					: typeof define == `function` && define.amd
						? define(C)
						: (window.SunCalc = C));
		})();
	})()
);
function Uo(e, t, n) {
	let r = Ga(n, t) / 6,
		i = Ga(t, Ro(t));
	return e.map((e, t) => ({ start: i + r * t, duration: r, period: e }));
}
var Wo = Vr(
	`<svg class="wadokei svelte-37vxvo" width="800" height="800" viewBox="-1510 -1510 3020 3020"><!><!><!><!></svg>`
);
function Go(e, t) {
	nt(t, !1);
	let n = P(),
		r = P(),
		i = P(),
		a = Y(t, `time`, 8),
		o = Y(t, `latitude`, 8),
		s = Y(t, `longitude`, 8),
		c = 1200,
		l = [
			{
				zodiacSign: `Rooster`,
				zodiacSymbol: `酉`,
				japaneseNumeral: `六`,
				strikes: `6`,
				solarTime: `sunset`
			},
			{
				zodiacSign: `Dog`,
				zodiacSymbol: `戌`,
				japaneseNumeral: `五`,
				strikes: `5`,
				solarTime: `evening`
			},
			{
				zodiacSign: `Pig`,
				zodiacSymbol: `亥`,
				japaneseNumeral: `四`,
				strikes: `4`,
				solarTime: `evening`
			},
			{
				zodiacSign: `Rat`,
				zodiacSymbol: `子`,
				japaneseNumeral: `九`,
				strikes: `9`,
				solarTime: `midnight`
			},
			{
				zodiacSign: `Ox`,
				zodiacSymbol: `丑`,
				japaneseNumeral: `八`,
				strikes: `8`,
				solarTime: `before dawn`
			},
			{
				zodiacSign: `Tiger`,
				zodiacSymbol: `寅`,
				japaneseNumeral: `七`,
				strikes: `7`,
				solarTime: `before dawn`
			}
		],
		u = [
			{
				zodiacSign: `Rabbit`,
				zodiacSymbol: `卯`,
				japaneseNumeral: `六`,
				strikes: `6`,
				solarTime: `sunrise`
			},
			{
				zodiacSign: `Dragon`,
				zodiacSymbol: `辰`,
				japaneseNumeral: `五`,
				strikes: `5`,
				solarTime: `morning`
			},
			{
				zodiacSign: `Snake`,
				zodiacSymbol: `巳`,
				japaneseNumeral: `四`,
				strikes: `4`,
				solarTime: `morning`
			},
			{
				zodiacSign: `Horse`,
				zodiacSymbol: `午`,
				japaneseNumeral: `九`,
				strikes: `9`,
				solarTime: `noon`
			},
			{
				zodiacSign: `Goat`,
				zodiacSymbol: `未`,
				japaneseNumeral: `八`,
				strikes: `8`,
				solarTime: `afternoon`
			},
			{
				zodiacSign: `Monkey`,
				zodiacSymbol: `申`,
				japaneseNumeral: `七`,
				strikes: `7`,
				solarTime: `afternoon`
			}
		];
	(R(
		() => (q(a()), q(o()), q(s())),
		() => {
			F(n, Ho.default.getTimes(a(), o(), s()));
		}
	),
		R(
			() => G(n),
			() => {
				F(r, G(n).sunrise);
			}
		),
		R(
			() => G(n),
			() => {
				F(i, G(n).sunset);
			}
		),
		zn());
	var d = { radius: c };
	Ji();
	var f = Wo();
	Di(f, `--radius: 1200`);
	var p = I(f);
	li(
		p,
		1,
		() => (q(Uo), G(r), G(i), K(() => Uo(u, G(r), G(i)))),
		(e) => e.period.zodiacSign,
		(e, t) => {
			xa(e, {
				get timedPeriod() {
					return G(t);
				},
				radius: c
			});
		}
	);
	var m = L(p);
	li(
		m,
		1,
		() => (q(Uo), G(i), q(Aa), G(r), K(() => Uo(l, G(i), Aa(G(r), 1)))),
		(e) => e.period.zodiacSign,
		(e, t) => {
			xa(e, {
				get timedPeriod() {
					return G(t);
				},
				radius: c
			});
		}
	);
	var h = L(m);
	return (
		li(
			h,
			0,
			() => Array(24),
			ai,
			(e, t, n) => {
				Ca(e, { hour: n, radius: c });
			}
		),
		Vo(L(h), {
			get time() {
				return a();
			},
			radius: c
		}),
		O(f),
		Ur(e, f),
		qi(t, `radius`, c),
		rt(d)
	);
}
var Ko = zr(`<main><!></main> <button>set location</button>`, 1);
function qo(e, t) {
	nt(t, !1);
	let n = P(new Date()),
		r = P(8.868428487177423),
		i = P(51.93410472914457);
	ri(() => {
		let e = setInterval(() => {
			F(n, new Date());
		}, 1e3);
		return () => clearInterval(e);
	});
	function a() {
		navigator.geolocation.getCurrentPosition((e) => {
			(F(i, e.coords.latitude), F(r, e.coords.longitude));
		});
	}
	Ji();
	var o = Ko(),
		s = bn(o);
	(Go(I(s), {
		get time() {
			return G(n);
		},
		get latitude() {
			return G(i);
		},
		get longitude() {
			return G(r);
		}
	}),
		O(s),
		Ar(`click`, L(s, 2), a),
		Ur(e, o),
		rt());
}
$r(qo, { target: document.getElementById(`app`) });
