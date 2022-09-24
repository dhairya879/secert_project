var dc = Object.defineProperty,
    hc = Object.defineProperties;
var pc = Object.getOwnPropertyDescriptors;
var Yf = Object.getOwnPropertySymbols;
var vc = Object.prototype.hasOwnProperty,
    mc = Object.prototype.propertyIsEnumerable;



var wi = Math.pow; function Bi(I, l) {
    return hc(I, pc(l));
}




function Pr(I, l) {
    for (var e in l || (l = {}))
        vc.call(l, e) && Vf(I, e, l[e]); if (Yf)
        for (var e of Yf(l))
            mc.call(l, e) && Vf(I, e, l[e]); return I;
}



function Vf(I, l, e) {
    return l in I ? dc(I, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : I[l] = e;
}
var Dn = (I, l, e) => new Promise((n, v) => {
    var d = r => { try { i(e.next(r)) } catch (t) { v(t) } }; function i(r) {
        return r.done ? n(r.value) : Promise.resolve(r.value).then(d, p);
    }


    function p(r) { try { i(e.throw(r)); } catch (t) { v(t); } }
    i((e = e.apply(I, l)).next())
});
(self.webpackChunkok_frontend_app = self.webpackChunkok_frontend_app || []).push([[1216], {
    95851: (I, l, e) => {
        "use strict";
        e.d(l, { i: () => n });
        const n = "abi/5.5.0"
    },
    72734: (I, l, e) => {
        "use strict"; e.d(l, { R: () => T, $: () => C });


        var n = e(93286), v = e(53587), d = e(80711), p = e(95851), i = e(61184),

            r = e(64594); class t extends i.XI {
                constructor(P) { super("address", "address", P, !1) }

            defaultValue() { return "0x0000000000000000000000000000000000000000" }


            encode(P, O) {
                try { O = (0, r.Kn)(O) } catch (F) {

                    this._throwError(F.message, O)

                }
                return P.writeValue(O)
            } decode(P) { return (0, r.Kn)((0, n.$m)(P.readValue().toHexString(), 20)) }
        }

        class a
            extends i.XI {
                constructor(P) { super(P.name, P.type, void 0, P.dynamic), this.coder = P }

            defaultValue() {
                return this.coder.defaultValue()
            }

            encode(P, O) {
                return this.coder.encode(P, O)
            }

            decode(P) {
                return this.coder.decode(P)
            }

        }

        const s = new d.Yd(p.i);

        function o(B, P, O) {
            let F = null;

            if (Array.isArray(O))

                F = O;

            else if (O && typeof O == "object") {
                let Ee = {};
                F = P.map(we => {
                    const U = we.localName;

                    return U || s.throwError("cannot encode object for signature with missing names", d.Yd.errors.INVALID_ARGUMENT,
                        { argument: "values", coder: we, value: O }), Ee[U] && s.throwError("cannot encode object for signature with duplicate names",
                            d.Yd.errors.INVALID_ARGUMENT,
                            { argument: "values", coder: we, value: O }),
                        Ee[U] = !0, O[U]
                })
            }
            else s.throwArgumentError("invalid tuple value", "tuple", O);
            P.length !== F.length && s.throwArgumentError("types/value length mismatch", "tuple", O);
            let W = new i.QV(B.wordSize),
                $ = new i.QV(B.wordSize), L = [];
            P.forEach((Ee, we) => {
                let U = F[we]; if (Ee.dynamic) {
                    let Q = $.length; Ee.encode($, U);

                    let ee = W.writeUpdatableValue();
                    L.push(ue => { ee(ue + Q) })
                } else Ee.encode(W, U)
            }),

                L.forEach(Ee => { Ee(W.length) });

            let K = B.appendWriter(W); return K += B.appendWriter($), K
        }

        function c(B, P) {

            let O = [], F = B.subReader(0); P.forEach($ => {
                let L = null; if ($.dynamic) {
                    let K = B.readValue(), Ee = F.subReader(K.toNumber());
                    try { L = $.decode(Ee) } catch (we) {
                        if (we.code === d.Yd.errors.BUFFER_OVERRUN) throw we;

                        L = we, L.baseType = $.name, L.name = $.localName, L.type = $.type
                    }
                }

                else try {
                    L = $.decode(B)
                } catch (K) {
                    if (K.code === d.Yd.errors.BUFFER_OVERRUN) throw K;
                    L = K, L.baseType = $.name, L.name = $.localName, L.type = $.type
                } L != null && O.push(L)
            });

            const W = P.reduce(($, L) => { const K = L.localName; return K && ($[K] || ($[K] = 0), $[K]++), $ }, {});

            P.forEach(($, L) => {
                let K = $.localName;

                if (!K || W[K] !== 1 || (K === "length" && (K = "_length"), O[K] != null)) return;

                const Ee = O[L];

                Ee instanceof Error ? Object.defineProperty(O, K, {
                    enumerable: !0, get: () => { throw Ee }
                }) : O[K] = Ee
            });

            for (let $ = 0; $ < O.length; $++) {
                const L = O[$];

                L instanceof Error && Object.defineProperty(O, $, { enumerable: !0, get: () => { throw L } })
            } return Object.freeze(O)
        }

        class f extends i.XI {

            constructor(P, O, F) {

                const W = P.type + "[" + (O >= 0 ? O : "") + "]", $ = O === -1 || P.dynamic; super("array", W, F, $), this.coder = P, this.length = O
            }
            defaultValue() {

                const P = this.coder.defaultValue(), O = [];

                for (let F = 0; F < this.length; F++)O.push(P);

                return O
            }

            encode(P, O) {
                Array.isArray(O) || this._throwError("expected array value", O); let F = this.length;
                F === -1 && (F = O.length, P.writeValue(O.length)), s.checkArgumentCount(O.length, F, "coder array" + (this.localName ? " " + this.localName : ""));

                let W = [];

                for (let $ = 0; $ < O.length; $++)W.push(this.coder);

                return o(P, W, O)
            }

            decode(P) {

                let O = this.length;

                O === -1 && (O = P.readValue().toNumber(), O * 32 > P._data.length && s.throwError("insufficient data length", d.Yd.errors.BUFFER_OVERRUN, { length: P._data.length, count: O }));
                let F = [];

                for (let W = 0; W < O; W++)F.push(new a(this.coder)); return P.coerce(this.name, c(P, F))
            }
        }

        class u extends i.XI {

            constructor(P) {

                super("bool", "bool", P, !1)

            }

            defaultValue() {
                return !1
            }

            encode(P, O) {

                return P.writeValue(O ? 1 : 0)

            }

            decode(P) {

                return P.coerce(this.type, !P.readValue().isZero())
            }

        }

        class h extends i.XI {

            constructor(P, O) {
                super(P, P, O, !0)

            }

            defaultValue() {

                return "0x"

            }

            encode(P, O) {

                O = (0, n.lE)(O);

                let F = P.writeValue(O.length); return F += P.writeBytes(O), F
            } decode(P) {

                return P.readBytes(P.readValue().toNumber(), !0)
            }

        }

        class m extends h {

            constructor(P) {

                super("bytes", P)

            }

            decode(P) {

                return P.coerce(this.name, (0, n.Dv)(super.decode(P)))
            }

        }

        class b extends i.XI {

            constructor(P, O) {
                let F = "bytes" + String(P);

                super(F, F, O, !1), this.size = P

            }

            defaultValue() {

                return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);

            }

            encode(P, O) {

                let F = (0, n.lE)(O);

                return F.length !== this.size && this._throwError("incorrect data length", O), P.writeBytes(F)

            }

            decode(P) {

                return P.coerce(this.name, (0, n.Dv)(P.readBytes(this.size)))
            }

        }

        class y extends i.XI {

            constructor(P) {

                super("null", "", P, !1)
            }


            defaultValue() {

                return null

            } encode(P, O) {

                return O != null && this._throwError("not null", O), P.writeBytes([])

            } decode(P) {

                return P.readBytes(0), P.coerce(this.name, null)
            }

        }

        var E = e(15154), w = e(21046);

        class x extends i.XI {

            constructor(P, O, F) {

                const W = (O ? "int" : "uint") + P * 8; super(W, W, F, !1), this.size = P, this.signed = O

            }

            defaultValue() {

                return 0
            }

            encode(P, O) {

                let F = E.O$.from(O), W = w.Bz.mask(P.wordSize * 8);

                if (this.signed) {

                    let $ = W.mask(this.size * 8 - 1);

                    (F.gt($) || F.lt($.add(w.fh).mul(w.tL))) && this._throwError("value out-of-bounds", O)


                }
                else (F.lt(w._Y) || F.gt(W.mask(this.size * 8))) && this._throwError("value out-of-bounds", O);

                return F = F.toTwos(this.size * 8).mask(this.size * 8), this.signed && (F = F.fromTwos(this.size * 8).toTwos(8 * P.wordSize)), P.writeValue(F)

            }

            decode(P) {

                let O = P.readValue().mask(this.size * 8);
                return this.signed && (O = O.fromTwos(this.size * 8)), P.coerce(this.name, O)
            }

        }

        var A = e(44242);

        class _ extends h {

            constructor(P) {
                super("string", P)

            }

            defaultValue() {

                return ""

            } encode(P, O) {

                return super.encode(P, (0, A.Y0)(O))

            }

            decode(P) {

                return (0, A.ZN)(super.decode(P))
            }

        }

        class k extends i.XI {

            constructor(P, O) {

                let F = !1; const W = []; P.forEach(L => {
                    L.dynamic && (F = !0), W.push(L.type)

                });

                const $ = "tuple(" + W.join(",") + ")";

                super("tuple", $, O, F), this.coders = P

            }

            defaultValue() {

                const P = []; this.coders.forEach(F => {

                    P.push(F.defaultValue())

                });

                const O = this.coders.reduce((F, W) => { const $ = W.localName; return $ && (F[$] || (F[$] = 0), F[$]++), F }, {});

                return this.coders.forEach((F, W) => {
                    let $ = F.localName;

                    !$ || O[$] !== 1 || ($ === "length" && ($ = "_length"), P[$] == null && (P[$] = P[W]))
                }

                ),

                    Object.freeze(P)
            }

            encode(P, O) {

                return o(P, this.coders, O)

            }

            decode(P) {

                return P.coerce(this.name, c(P, this.coders))
            }

        }

        var j = e(11388);

        const D = new d.Yd(p.i), Y = new RegExp(/^bytes([0-9]*)$/), V = new RegExp(/^(u?int)([0-9]*)$/);

        class T {

            constructor(P) {

                D.checkNew(new.target, T), (0, v.zG)(this, "coerceFunc", P || null)

            }

            _getCoder(P) {

                switch (P.baseType) {

                    case "address": return new t(P.name);

                    case "bool": return new u(P.name);

                    case "string": return new _(P.name);

                    case "bytes": return new m(P.name);

                    case "array": return new f(this._getCoder(P.arrayChildren), P.arrayLength, P.name);

                    case "tuple": return new k((P.components || []).map(F => this._getCoder(F)), P.name);

                    case "": return new y(P.name)

                }

                let O = P.type.match(V);

                if (O) {
                    let F = parseInt(O[2] || "256");

                    return (F === 0 || F > 256 || F % 8 !== 0) && D.throwArgumentError("invalid " + O[1] + " bit length", "param", P), new x(F / 8, O[1] === "int", P.name)

                }

                if (O = P.type.match(Y), O) {

                    let F = parseInt(O[1]);

                    return (F === 0 || F > 32) && D.throwArgumentError("invalid bytes length", "param", P), new b(F, P.name)

                }

                return D.throwArgumentError("invalid type", "type", P.type)

            }

            _getWordSize() {

                return 32

            }

            _getReader(P, O) {

                return new i.Ej(P, this._getWordSize(), this.coerceFunc, O)

            }

            _getWriter() {

                return new i.QV(this._getWordSize())

            } getDefaultValue(P) {

                const O = P.map(W => this._getCoder(j._R.from(W))); return new k(O, "_").defaultValue()

            }

            encode(P, O) {

                P.length !== O.length && D.throwError("types/values length mismatch", d.Yd.errors.INVALID_ARGUMENT, {

                    count: {

                        types: P.length, values: O.length
                    }, value: { types: P, values: O }

                }

                );

                const F = P.map(L => this._getCoder(j._R.from(L))), W = new k(F, "_"), $ = this._getWriter();

                return W.encode($, O), $.data

            }


            decode(P, O, F) {

                const W = P.map(L => this._getCoder(j._R.from(L)));

                return new k(W, "_").decode(this._getReader((0, n.lE)(O), F)
                )
            }

        }

        const C = new T

    }, 61184: (I, l, e) => {

        "use strict"; e.d(l, {

            BR: () => t, Ej: () => o, QV: () => s, XI: () => a
        });

        var { p, i, d, n, v } = newFunction();

        const r = new p.Yd(i.i); function newFunction() {
            var n = e(93286), v = e(15154), d = e(53587), p = e(80711), i = e(95851);
            return { p, i, d, n, v };
        }

        function t(c) {

            const f = [], u = function (h, m) {

                if (!!Array.isArray(m)

                )

                    for (let b in m) {

                        const y = h.slice();

                        y.push(b);

                        try {

                            u(y, m[b])

                        }

                        catch (E) {

                            f.push({ path: y, error: E })
                        }
                    }
            };
            return u([], c), f
        }

        class a {

            constructor(f, u, h, m) {

                this.name = f,
                    this.type = u,

                    this.localName = h,

                    this.dynamic = m

            }

            _throwError(f, u) {

                r.throwArgumentError(f, this.localName, u)

            }
        }

        class s {

            constructor(f) {

                (0, d.zG)(this, "wordSize", f || 32),

                    this._data = [],

                    this._dataLength = 0,

                    this._padding = new Uint8Array(f)

            }
            get data() {

                return (0, n.xs)(this._data)
            }

            get length() {

                return this._dataLength

            }

            _writeData(f) {

                return this._data.push(f),


                    this._dataLength += f.length, f.length

            }


            appendWriter(f) {

                return this._writeData((0, n.zo)(f._data)

                )

            }

            writeBytes(f) {

                let u = (0, n.lE)(f);

                const h = u.length % this.wordSize;

                return h && (u = (0, n.zo)([u, this._padding.slice(h)]

                )

                ),

                    this._writeData(u)

            }

            _getValue(f) {

                let u = (0, n.lE)

                    (v.O$.from(f)

                    );

                return u.length > this.wordSize && r.throwError("value out-of-bounds", p.Yd.errors.BUFFER_OVERRUN, {

                    length: this.wordSize, offset: u.length

                }

                ),

                    u.length % this.wordSize && (u = (0, n.zo)(
                        [
                            this._padding.slice(u.length % this.wordSize), u

                        ]
                    )
                    ),
                    u
            }

            writeValue(f) {

                return this._writeData(this._getValue(f)
                )
            }

            writeUpdatableValue() {

                const f = this._data.length;

                return this._data.push(this._padding),

                    this._dataLength += this.wordSize,

                    u => {

                        this._data[f] = this._getValue(u)

                    }
            }
        }

        class o {

            constructor(f, u, h, m) {

                (0, d.zG)(this, "_data",

                    (0, n.lE)(f)),

                    (0, d.zG)

                        (this, "wordSize", u || 32),

                    (0, d.zG)

                        (this, "_coerceFunc", h),

                    (0, d.zG)

                        (this, "allowLoose", m),

                    this._offset = 0

            }

            get data() {

                return (0, n.Dv)

                    (this._data)

            }

            get consumed() {

                return this._offset

            }

            static coerce(f, u) {


                let h = f.match("^u?int([0-9]+)$");

                return h && parseInt(h[1]) <= 48 && (u = u.toNumber()), u

            }


            coerce(f, u) {

                return this._coerceFunc ? this._coerceFunc(f, u) : o.coerce(f, u)

            }

            _peekBytes(f, u, h) {

                let m = Math.ceil(u / this.wordSize) * this.wordSize;

                return this._offset + m > this._data.length && (this.allowLoose && h && this._offset + u <= this._data.length ? m = u : r.throwError("data out-of-bounds", p.Yd.errors.BUFFER_OVERRUN, {

                    length: this._data.length, offset: this._offset + m
                }
                )
                ),
                    this._data.slice(this._offset, this._offset + m)

            }

            subReader(f) {

                return new o(this._data.slice(this._offset + f), this.wordSize, this._coerceFunc, this.allowLoose)

            }

            readBytes(f, u) {

                let h = this._peekBytes(0, f, !!u);
                return this._offset += h.length, h.slice(0, f)

            }

            readValue() {

                return v.O$.from(this.readBytes(this.wordSize)
                )
            }
        }
    },

    11388: (I, l, e) => {

        "use strict";
        e.d(l, {
            HY: () => y, QV: () => E, Xg: () => _, YW: () => k, _R: () => m, pc: () => u
        }
        );
        var n = e(15154), v = e(53587), d = e(80711), p = e(95851), i = e(25108);

        const r = new d.Yd(p.i), t = {};

        let a = { calldata: !0, memory: !0, storage: !0 }, s = { calldata: !0, memory: !0 };

        function o(P, O) {

            if (P === "bytes" || P === "string") {

                if (a[O])

                    return !0

            }

            else if (P === "address") {
                if (O === "payable") return !0

            }
            else if ((P.indexOf("[") >= 0 || P === "tuple") && s[O]) return !0;

            return (a[O] || O === "payable") && r.throwArgumentError("invalid modifier", "name", O), !1

        }

        function c(P, O) {

            let F = P; function W(Ee) {

                r.throwArgumentError(`unexpected character at position ${Ee}`, "param", P)

            }

            P = P.replace(/\s/g, " ");

            function $(Ee) {

                let we = {
                    type: "", name: "", parent: Ee, state: { allowType: !0 }

                };

                return O && (we.indexed = !1), we
            }

            let L = {
                type: "", name: "", state: {

                    allowType: !0
                }
            },

                K = L;

            for (let Ee = 0; Ee < P.length; Ee++) {

                let we = P[Ee]; switch (we) {
                    case "(": K.state.allowType && K.type === "" ? K.type = "tuple" : K.state.allowParams

                        ||

                        W(Ee), K.state.allowType = !1, K.type = Y(K.type), K.components = [$(K)],
                        K = K.components[0];

                        break;

                    case ")": delete K.state,

                        K.name === "indexed" && (O || W(Ee), K.indexed = !0, K.name = ""),
                        o(K.type, K.name) && (K.name = ""),


                        K.type = Y(K.type);

                        let U = K;

                        K = K.parent,

                            K || W(Ee), delete U.parent,

                            K.state.allowParams = !1, K.state.allowName = !0, K.state.allowArray = !0;

                        break;

                    case ",": delete K.state, K.name === "indexed" && (O || W(Ee), K.indexed = !0, K.name = ""),
                        o(K.type, K.name) && (K.name = ""),

                        K.type = Y(K.type);
                        let Q = $(K.parent);
                        K.parent.components.push(Q), delete K.parent, K = Q; break;

                    case " ": K.state.allowType && K.type !== "" && (K.type = Y(K.type),

                        delete K.state.allowType,
                        K.state.allowName = !0,
                        K.state.allowParams = !0),

                        K.state.allowName && K.name !== "" && (K.name === "indexed" ? (O || W(Ee), K.indexed && W(Ee), K.indexed = !0, K.name = "") : o(K.type, K.name) ? K.name = "" : K.state.allowName = !1);

                        break;

                    case
                        "[": K.state.allowArray || W(Ee),
                            K.type += we, K.state.allowArray = !1,
                            K.state.allowName = !1, K.state.readArray = !0; break;
                    case "]": K.state.readArray || W(Ee),
                        K.type += we,
                        K.state.readArray = !1, K.state.allowArray = !0,
                        K.state.allowName = !0;

                        break;

                    default: K.state.allowType ? (K.type += we,
                        K.state.allowParams = !0,
                        K.state.allowArray = !0) : K.state.allowName ? (K.name += we, delete K.state.allowArray) : K.state.readArray ? K.type += we : W(Ee)
                }
            }
            return
            K.parent && r.throwArgumentError("unexpected eof", "param", P), delete L.state, K.name === "indexed" ? (O || W(F.length - 7), K.indexed && W(F.length - 7), K.indexed = !0, K.name = "") : o(K.type, K.name) && (K.name = ""), L.type = Y(L.type), L
        } function f(P, O) {
            for (let F in O) (0, v.zG)(P, F, O[F])

        }

        const u = Object.freeze(
            {
                sighash: "sighash",
                minimal: "minimal",
                full: "full", json: "json"
            }
        ),
            h = new RegExp(/^(.*)\[([0-9]*)\]$/);

        class m {
            constructor(O, F) {
                O !== t && r.throwError("use fromString", d.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "new ParamType()"
                }), f(this, F); let W = this.type.match(h); W ? f(this, {
                    arrayLength: parseInt(W[2] || "-1"), arrayChildren: m.fromObject(
                        {
                            type: W[1], components: this.components
                        }
                    ),
                    baseType: "array"
                }) : f(this, {
                    arrayLength: null, arrayChildren: null, baseType: this.components != null ? "tuple" : this.type
                }), this._isParamType = !0, Object.freeze(this)
            } format(O) {
                if (O || (O = u.sighash), u[O] || r.throwArgumentError("invalid format type", "format", O), O === u.json) {
                    let W = {
                        type: this.baseType === "tuple" ? "tuple" : this.type, name: this.name || void 0
                    };
                    return typeof this.indexed == "boolean" && (W.indexed = this.indexed), this.components && (W.components = this.components.map($ => JSON.parse($.format(O)))), JSON.stringify(W)
                } let F = "";

                return
                this.baseType === "array" ? (F += this.arrayChildren.format(O), F += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]") : this.baseType === "tuple" ? (O !== u.sighash && (F += this.type), F += "(" + this.components.map(W => W.format(O)).join(O === u.full ? ", " : ",") + ")") : F += this.type, O !== u.sighash && (this.indexed === !0 && (F += " indexed"), O === u.full && this.name && (F += " " + this.name)), F
            } static

                from(O, F) {
                return
                typeof O == "string" ? m.fromString(O, F) : m.fromObject(O)
            } static
                fromObject(O) {
                    return m.isParamType(O) ? O : new m(t, {
                        name: O.name || null, type: Y(O.type), indexed: O.indexed == null ? null : !!O.indexed, components: O.components ? O.components.map(m.fromObject) : null
                    }
                    )
            }
            static
                fromString(O, F) {
                    function W($) {
                        return
                        m.fromObject({
                            name: $.name, type: $.type, indexed: $.indexed, components: $.components
                        }
                        )
                    }
                return
                W(c(O, !!F))
            }
            static
                isParamType(O) {
                return !!(O != null && O._isParamType)
            }
        }
        function b(P, O) {
            return
            B(P).map(F => m.fromString(F, O))
        }
        class y {
            constructor(O, F) {
                O !== t && r.throwError("use a static from method", d.Yd.errors.UNSUPPORTED_OPERATION, {
                    operation: "new Fragment()"
                }
                ),
                    f(this, F), this._isFragment = !0, Object.freeze(this)
            }
            static
                from(O) {
                return y.isFragment(O) ? O : typeof O == "string" ? y.fromString(O) : y.fromObject(O)
            }
            static
                fromObject(O) {
                if (y.isFragment(O)) return O;
                switch (O.type) {
                    case "function": return k.fromObject(O);
                    case "event": return E.fromObject(O);
                    case "constructor": return _.fromObject(O);
                    case "error": return D.fromObject(O);
                    case "fallback": case "receive": return null
                }
                return
                r.throwArgumentError("invalid fragment object", "value", O)
            }
            static
                fromString(O) {
                return O = O.replace(/\s/g, " "), O = O.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " "), O = O.trim(), O.split(" ")[0] === "event" ? E.fromString(O.substring(5).trim()) : O.split(" ")[0] === "function" ? k.fromString(O.substring(8).trim()) : O.split("(")[0].trim() === "constructor" ? _.fromString(O.trim()) : O.split(" ")[0] === "error" ? D.fromString(O.substring(5).trim()) : r.throwArgumentError("unsupported fragment", "value", O)
            } static isFragment(O) {
                return !!
                    (O && O._isFragment)
            }
        }
        class E extends y {
            format(O) {
                if (O || (O = u.sighash), u[O] || r.throwArgumentError("invalid format type", "format", O), O === u.json) return
                JSON.stringify({
                    type: "event", anonymous: this.anonymous, name: this.name, inputs: this.inputs.map(W => JSON.parse(W.format(O)))
                }
                );
                let F = "";

                return O !== u.sighash && (F += "event "), F += this.name + "(" + this.inputs.map(W => W.format(O)).join(O === u.full ? ", " : ",") + ") ", O !== u.sighash && this.anonymous && (F += "anonymous "), F.trim()
            }
            static
                from(O) {
                return
                typeof O == "string" ? E.fromString(O) : E.fromObject(O)
            }
            static


                fromObject(O) {
                if (E.isEventFragment(O)) return O;
                O.type !== "event" && r.throwArgumentError("invalid event object", "value", O);

                const F = {
                    name: T(O.name), anonymous: O.anonymous, inputs: O.inputs ? O.inputs.map(m.fromObject) : [], type: "event"
                };
                return
                new E(t, F)
            }
            static
                fromString(O) {
                let F = O.match(C);
                F || r.throwArgumentError("invalid event string", "value", O);
                let W = !1;
                return
                F[3].split(" ").forEach($ => {
                    switch ($.trim()) {
                        case "anonymous": W = !0; break;
                        case "": break;

                        default: r.warn("unknown modifier: " + $)
                    }
                }
                ), E.fromObject({ name: F[1].trim(), anonymous: W, inputs: b(F[2], !0), type: "event" })

            }

            static

                isEventFragment(O) {
                return O && O._isFragment && O.type === "event"
            }
        }
        function w(P, O) {
            O.gas = null;

            let F = P.split("@");

            return F.length !== 1 ? (F.length > 2 && r.throwArgumentError("invalid human-readable ABI signature", "value", P), F[1].match(/^[0-9]+$/) || r.throwArgumentError("invalid human-readable ABI signature gas", "value", P), O.gas = n.O$.from(F[1]), F[0]) : P
        
        }
        
        function x(P, O) { 
            O.constant = !1, O.payable = !1, O.stateMutability = "nonpayable", P.split(" ").forEach(F => {
                 switch (F.trim()) { 
                    case "constant": O.constant = !0;
                     break; 
                     case "payable": O.payable = !0, O.stateMutability = "payable"; 
                     break; 
                     case "nonpayable": O.payable = !1, O.stateMutability = "nonpayable";
                      break;
                       case "pure": O.constant = !0, O.stateMutability = "pure";
                        break; 
                        case "view": O.constant = !0, O.stateMutability = "view";
                         break;
                          case "external": case "public": case "": break; 
                          
                          default: i.log("unknown modifier: " + F) 
                        } 
                    }
                    ) }
                    
                    function A(P) { 
                        
                        let O = { 
                            
                            constant: !1, payable: !0, stateMutability: "payable"
                         };
                         
                         return P.stateMutability != null ? (
                            O.stateMutability = P.stateMutability, O.constant = O.stateMutability === "view" || O.stateMutability === "pure", P.constant != null && !!P.constant !== O.constant && r.throwArgumentError("cannot have constant function with mutability " + O.stateMutability, "value", P), O.payable = O.stateMutability === "payable", P.payable != null && !!P.payable !== O.payable && r.throwArgumentError("cannot have payable function with mutability " + O.stateMutability, "value", P)
                            
                            ) 
                            
                            
                            : P.payable != null ? (O.payable = !!P.payable, P.constant == null && !O.payable && P.type !== "constructor" && r.throwArgumentError("unable to determine stateMutability", "value", P), O.constant = !!P.constant, O.constant ? O.stateMutability = "view" : O.stateMutability = O.payable ? "payable" : "nonpayable", O.payable && O.constant && r.throwArgumentError("cannot have constant payable function", "value", P)) : P.constant != null ? (O.constant = !!P.constant, O.payable = !O.constant, O.stateMutability = O.constant ? "view" : "payable") : P.type !== "constructor" && r.throwArgumentError("unable to determine stateMutability", "value", P), O } class _ extends y { format(O) {
                                
                                if (O || (O = u.sighash), u[O] || r.throwArgumentError(
                                    
                                    "invalid format type", "format", O
                                    
                                    ), O === u.json
                                    
                                    ) 
                                    
                                    return JSON.stringify(
                                        { 
                                            type: "constructor", stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0, payable: this.payable, gas: this.gas ? this.gas.toNumber() : void 0, inputs: this.inputs.map(W => JSON.parse(W.format(O))
                                            )
                                         }
                                         );
                                         
                                         O === u.sighash && r.throwError("cannot format a constructor for sighash", d.Yd.errors.UNSUPPORTED_OPERATION, { 
                                            operation: "format(sighash)" 
                                        }
                                        );
                                        
                                        let F = "constructor(" + this.inputs.map(W => W.format(O)).join(O === u.full ? ", " : ",") + ") "; 
                                        
                                        return this.stateMutability && this.stateMutability !== "nonpayable" && (F += this.stateMutability + " "), F.trim()
                                    
                                    }
                                    
                                    static
                                     from(O) {
                                        
                                        return typeof O == "string" ? _.fromString(O) : _.fromObject(O) 
                                    
                                    } 
                                    
                                    static fromObject(O) {
                                        
                                        if (_.isConstructorFragment(O)
                                        
                                        ) 
                                        return O;
                                        
                                        O.type !== "constructor" && r.throwArgumentError("invalid constructor object", "value", O); 
                                        
                                        let F = A(O); F.constant && r.throwArgumentError("constructor cannot be constant", "value", O);
                                        
                                        const W = { 
                                            name: null, type: O.type, inputs: O.inputs ? O.inputs.map(m.fromObject) : [], payable: F.payable, stateMutability: F.stateMutability, gas: O.gas ? n.O$.from(O.gas) : null }; return new _(t, W) 
                                        
                                        } 
                                        
                                        static fromString(O) {
                                            
                                            let F = { 
                                                
                                                type: "constructor"
                                            
                                            };
                                            
                                            O = w(O, F);
                                            
                                            let W = O.match(C);
                                            
                                            return (!W || W[1].trim() !== "constructor") && r.throwArgumentError("invalid constructor string", "value", O), F.inputs = b(W[2].trim(), !1), x(W[3].trim(), F), _.fromObject(F) 
                                        
                                        } 
                                        
                                        static isConstructorFragment(O) {
                                            
                                            return O && O._isFragment && O.type === "constructor" 
                                        
                                        }
                                    
                                    }
                                     
                                    class k extends _ { 
                                        
                                        format(O) {
                                            
                                            
                                            if (O || (O = u.sighash), u[O] || r.throwArgumentError("invalid format type", "format", O), O === u.json) 
                                            return JSON.stringify(
                                                {
                                                     type: "function", name: this.name, constant: this.constant, stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0, payable: this.payable, gas: this.gas ? this.gas.toNumber() : void 0, inputs: this.inputs.map(W => JSON.parse(W.format(O)
                                                     
                                                     )
                                                     ), outputs: this.outputs.map(W => JSON.parse(W.format(O)
                                                     )
                                                     ) 
                                                    }
                                                    );
                                                    
                                                    let F = ""; 
                                                    
                                                    return O !== u.sighash && (F += "function "), F += this.name + "(" + this.inputs.map(W => W.format(O)).join(O === u.full ? ", " : ",") + ") ", O !== u.sighash && (this.stateMutability ? this.stateMutability !== "nonpayable" && (F += this.stateMutability + " ") : this.constant && (F += "view "), this.outputs && this.outputs.length && (F += "returns (" + this.outputs.map(W => W.format(O)
                                                    
                                                    ).join(", ") + ") "), this.gas != null && (F += "@" + this.gas.toString() + " ")), F.trim() 
                                                
                                                }
                                                
                                                static from(O) { 
                                                    
                                                    return typeof O == "string" ? k.fromString(O) : k.fromObject(O)
                                                 }
                                                 
                                                 static fromObject(O) { 
                                                    
                                                    if (k.isFunctionFragment(O)
                                                    
                                                    ) 
                                                    
                                                    return O;
                                                    
                                                    O.type !== "function" && r.throwArgumentError("invalid function object", "value", O);
                                                    
                                                    let F = A(O); const W = { 
                                                        
                                                        type: O.type, name: T(O.name), constant: F.constant, inputs: O.inputs ? O.inputs.map(m.fromObject) : [], outputs: O.outputs ? O.outputs.map(m.fromObject) : [], payable: F.payable, stateMutability: F.stateMutability, gas: O.gas ? n.O$.from(O.gas) : null
                                                     };
                                                     
                                                     return new k(t, W) 
                                                    
                                                    
                                                    } 
                                                    
                                                    static fromString(O) {
                                                        
                                                        let F = { type: "function"
                                                    
                                                    }; 
                                                    
                                                    O = w(O, F); 
                                                    
                                                    let W = O.split(" returns "); 
                                                    
                                                    W.length > 2 && r.throwArgumentError("invalid function string", "value", O);
                                                    
                                                    let $ = W[0].match(C); 
                                                    
                                                    if ($ || r.throwArgumentError("invalid function signature", "value", O), F.name = $[1].trim(), F.name && T(F.name), F.inputs = b($[2], !1), x($[3].trim(), F), W.length > 1) {
                                                        
                                                        let L = W[1].match(C);
                                                         (L[1].trim() != "" || L[3].trim() != "") && r.throwArgumentError("unexpected tokens", "value", O), F.outputs = b(L[2], !1) 
                                                        
                                                        } 
                                                        else F.outputs = []; 
                                                        
                                                        return k.fromObject(F)
                                                    
                                                    } static 
                                                    isFunctionFragment(O) { 
                                                        return O && O._isFragment && O.type === "function" 
                                                    }
                                                 
                                                }
                                                
                                                
                                                function j(P) {
                                                    
                                                    const O = P.format();
                                                     return (O === "Error(string)" || O === "Panic(uint256)") && r.throwArgumentError(`cannot specify user defined ${O} error`, "fragment", P), P
                                                    
                                                    } 
                                                    
                                                    class D extends y {
                                                        
                                                        format(O) {
                                                            
                                                            if (
                                                                O || (O = u.sighash), u[O] || r.throwArgumentError("invalid format type", "format", O), O === u.json
                                                                
                                                                ) 
                                                                
                                                                return JSON.stringify(
                                                                    { 
                                                                        type: "error", name: this.name, inputs: this.inputs.map(W => JSON.parse(W.format(O))) 
                                                                    }
                                                                    );
                                                                    
                                                                    let F = "";
                                                                     return O !== u.sighash && (F += "error "), F += this.name + "(" + this.inputs.map(W => W.format(O)).join(O === u.full ? ", " : ",") + ") ", F.trim()
                                                                    
                                                                    }
                                                                    
                                                                    static from(O) {
                                                                         return typeof O == "string" ? D.fromString(O) : D.fromObject(O)
                                                                        
                                                                        }
                                                                        
                                                                        static fromObject(O) {
                                                                             if (D.isErrorFragment(O)) return O;
                                                                              O.type !== "error" && r.throwArgumentError("invalid error object", "value", O);
                                                                              
                                                                              const F = {
                                                                                 type: O.type, name: T(O.name), inputs: O.inputs ? O.inputs.map(m.fromObject) : [] 
                                                                                };
                                                                                 return j(new D(t, F)) 
                                                                                
                                                                                }
                                                                                 static fromString(O) { 
                                                                                    let F = { type: "error" }, W = O.match(C);
                                                                                    
                                                                                    return W || r.throwArgumentError("invalid error signature", "value", O), F.name = W[1].trim(), F.name && T(F.name), F.inputs = b(W[2], !1), j(D.fromObject(F)) } static isErrorFragment(O) {
                                                                                         return O && O._isFragment && O.type === "error" 
                                                                                        }
                                                                                     }
                                                                                     
                                                                                     function Y(P) {
                                                                                        
                                                                                        return P.match(/^uint($|[^1-9])/) ? P = "uint256" + P.substring(4) : P.match(/^int($|[^1-9])/) && (P = "int256" + P.substring(3)), P 
                                                                                    
                                                                                    }
                                                                                    
                                                                                    const V = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
                                                                                    
                                                                                    function T(P) {
                                                                                        
                                                                                        return (!P || !P.match(V)) && r.throwArgumentError(`invalid identifier "${P}"`, "value", P), P 
                                                                                    
                                                                                    }
                                                                                     
                                                                                    const C = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
                                                                                     function B(P) { 
                                                                                        P = P.trim();
                                                                                        
                                                                                        let O = [], F = "", W = 0; for (let $ = 0; $ < P.length; $++) { 
                                                                                            
                                                                                            let L = P[$]; L === "," && W === 0 ? (O.push(F), F = "") : (F += L, L === "(" ? W++ : L === ")" && (W--, W === -1 && r.throwArgumentError("unbalanced parenthesis", "value", P))) 
                                                                                        
                                                                                        }
                                                                                        
                                                                                        return F && O.push(F), O
                                                                                     
                                                                                    }

    },
    
    
    
    83893: (I, l, e) => { 
        
        "use strict"; e.d(l, { 
            RQ: () => v.R, _R: () => n._R 
        });
         var n = e(11388), v = e(72734) }, 64594: (I, l, e) => { "use strict"; e.d(l, { Kn: () => h, CR: () => y });
         
         var n = e(93286), v = e(15154), d = e(38197), p = e(61843), i = e(80711); const r = "address/5.5.0", t = new i.Yd(r); function a(w) {
            
            (0, n.A7)(w, 20) || t.throwArgumentError("invalid address", "address", w), w = w.toLowerCase();
            
            const x = w.substring(2).split(""), A = new Uint8Array(40); for (let k = 0; k < 40; k++)A[k] = x[k].charCodeAt(0); 
            
            const _ = (0, n.lE)((0, d.w)(A)); for (let k = 0; k < 40; k += 2)_[k >> 1] >> 4 >= 8 && (x[k] = x[k].toUpperCase()), (_[k >> 1] & 15) >= 8 && (x[k + 1] = x[k + 1].toUpperCase());
            
            return "0x" + x.join("")
        
        }
        
        const s = 9007199254740991; function o(w) { 
            return Math.log10 ? Math.log10(w) : Math.log(w) / Math.LN10 
        }
         
        const c = {};
        
        for (let w = 0;
             
            w < 10; w++)c[String(w)] = String(w); for (let w = 0; w < 26; w++)c[String.fromCharCode(65 + w)] = String(10 + w); const f = Math.floor(o(s));
            
            function u(w) { 
                
                w = w.toUpperCase(), w = w.substring(4) + w.substring(0, 2) + "00"; let x = w.split("").map(_ => c[_]).join(""); for (; x.length >= f;
                    )
                     
                    {
                         
                        let _ = x.substring(0, f);
                        
                        x = parseInt(_, 10) % 97 + x.substring(_.length)
                    
                    } 
                    
                    let A = String(98 - parseInt(x, 10) % 97);
                    
                    for (; A.length < 2;)A = "0" + A; return A 
                
                }
                
                function h(w) {
                    
                    let x = null;
                    
                    if (typeof w != "string" && t.throwArgumentError("invalid address", "address", w), w.match(/^(0x)?[0-9a-fA-F]{400}$/)
                    )
                     
                    w.substring(0, 2) !== "0x" && (w = "0x" + w), x = a(w), w.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && x !== w && t.throwArgumentError("bad address checksum", "address", w);
                    
                    else if (w.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)
                    )
                    
                    {
                        
                        for (w.substring(2, 4) !== u(w) && t.throwArgumentError("bad icap checksum", "address", w), x = (0, v.g$)(w.substring(4));
                        
                        x.length < 40;)x = "0" + x; x = a("0x" + x) 
                    
                    } 
                    
                    else t.throwArgumentError("invalid address", "address", w); return x 
                
                }
                
                function m(w) {
                    
                    try { return h(w), !0 
                    
                    } catch (x) { } return !1 
                
                } function b(w) { let x = _base16To36(h(w).substring(2)).toUpperCase(); for (; x.length < 30;)x = "0" + x; return "XE" + u("XE00" + x) + x } function y(w) { let x = null; try { x = h(w.from) } catch (_) { t.throwArgumentError("missing from address", "transaction", w) } const A = (0, n.G1)((0, n.lE)(v.O$.from(w.nonce).toHexString())); return h((0, n.p3)((0, d.w)((0, p.c)([x, A])), 12)) } function E(w, x, A) { return hexDataLength(x) !== 32 && t.throwArgumentError("salt must be 32 bytes", "salt", x), hexDataLength(A) !== 32 && t.throwArgumentError("initCodeHash must be 32 bytes", "initCodeHash", A), h(hexDataSlice(keccak256(concat(["0xff", h(w), x, A])), 12)) } }, 15154: (I, l, e) => { "use strict"; e.d(l, { O$: () => f, g$: () => y }); var n = e(13550), v = e.n(n), d = e(93286), p = e(80711); const i = "bignumber/5.5.0"; var r = v().BN; const t = new p.Yd(i), a = {}, s = 9007199254740991; function o(w) { return w != null && (f.isBigNumber(w) || typeof w == "number" && w % 1 === 0 || typeof w == "string" && !!w.match(/^-?[0-9]+$/) || isHexString(w) || typeof w == "bigint" || isBytes(w)) } let c = !1; class f { constructor(x, A) { t.checkNew(new.target, f), x !== a && t.throwError("cannot call constructor directly; use BigNumber.from", p.Yd.errors.UNSUPPORTED_OPERATION, { operation: "new (BigNumber)" }), this._hex = A, this._isBigNumber = !0, Object.freeze(this) } fromTwos(x) { return h(m(this).fromTwos(x)) } toTwos(x) { return h(m(this).toTwos(x)) } abs() { return this._hex[0] === "-" ? f.from(this._hex.substring(1)) : this } add(x) { return h(m(this).add(m(x))) } sub(x) { return h(m(this).sub(m(x))) } div(x) { return f.from(x).isZero() && b("division by zero", "div"), h(m(this).div(m(x))) } mul(x) { return h(m(this).mul(m(x))) } mod(x) { const A = m(x); return A.isNeg() && b("cannot modulo negative values", "mod"), h(m(this).umod(A)) } pow(x) { const A = m(x); return A.isNeg() && b("cannot raise to negative values", "pow"), h(m(this).pow(A)) } and(x) { const A = m(x); return (this.isNegative() || A.isNeg()) && b("cannot 'and' negative values", "and"), h(m(this).and(A)) } or(x) { const A = m(x); return (this.isNegative() || A.isNeg()) && b("cannot 'or' negative values", "or"), h(m(this).or(A)) } xor(x) { const A = m(x); return (this.isNegative() || A.isNeg()) && b("cannot 'xor' negative values", "xor"), h(m(this).xor(A)) } mask(x) { return (this.isNegative() || x < 0) && b("cannot mask negative values", "mask"), h(m(this).maskn(x)) } shl(x) { return (this.isNegative() || x < 0) && b("cannot shift negative values", "shl"), h(m(this).shln(x)) } shr(x) { return (this.isNegative() || x < 0) && b("cannot shift negative values", "shr"), h(m(this).shrn(x)) } eq(x) { return m(this).eq(m(x)) } lt(x) { return m(this).lt(m(x)) } lte(x) { return m(this).lte(m(x)) } gt(x) { return m(this).gt(m(x)) } gte(x) { return m(this).gte(m(x)) } isNegative() { return this._hex[0] === "-" } isZero() { return m(this).isZero() } toNumber() { try { return m(this).toNumber() } catch (x) { b("overflow", "toNumber", this.toString()) } return null } toBigInt() { try { return BigInt(this.toString()) } catch (x) { } return t.throwError("this platform does not support BigInt", p.Yd.errors.UNSUPPORTED_OPERATION, { value: this.toString() }) } toString() { return arguments.length > 0 && (arguments[0] === 10 ? c || (c = !0, t.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? t.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", p.Yd.errors.UNEXPECTED_ARGUMENT, {}) : t.throwError("BigNumber.toString does not accept parameters", p.Yd.errors.UNEXPECTED_ARGUMENT, {})), m(this).toString(10) } toHexString() { return this._hex } toJSON(x) { return { type: "BigNumber", hex: this.toHexString() } } static from(x) { if (x instanceof f) return x; if (typeof x == "string") return x.match(/^-?0x[0-9a-f]+$/i) ? new f(a, u(x)) : x.match(/^-?[0-9]+$/) ? new f(a, u(new r(x))) : t.throwArgumentError("invalid BigNumber string", "value", x); if (typeof x == "number") return x % 1 && b("underflow", "BigNumber.from", x), (x >= s || x <= -s) && b("overflow", "BigNumber.from", x), f.from(String(x)); const A = x; if (typeof A == "bigint") return f.from(A.toString()); if ((0, d._t)(A)) return f.from((0, d.Dv)(A)); if (A) if (A.toHexString) { const _ = A.toHexString(); if (typeof _ == "string") return f.from(_) } else { let _ = A._hex; if (_ == null && A.type === "BigNumber" && (_ = A.hex), typeof _ == "string" && ((0, d.A7)(_) || _[0] === "-" && (0, d.A7)(_.substring(1)))) return f.from(_) } return t.throwArgumentError("invalid BigNumber value", "value", x) } static isBigNumber(x) { return !!(x && x._isBigNumber) } } function u(w) { if (typeof w != "string") return u(w.toString(16)); if (w[0] === "-") return w = w.substring(1), w[0] === "-" && t.throwArgumentError("invalid hex", "value", w), w = u(w), w === "0x00" ? w : "-" + w; if (w.substring(0, 2) !== "0x" && (w = "0x" + w), w === "0x") return "0x00"; for (w.length % 2 && (w = "0x0" + w.substring(2)); w.length > 4 && w.substring(0, 4) === "0x00";)w = "0x" + w.substring(4); return w } function h(w) { return f.from(u(w)) } function m(w) { const x = f.from(w).toHexString(); return x[0] === "-" ? new r("-" + x.substring(3), 16) : new r(x.substring(2), 16) } function b(w, x, A) { const _ = { fault: w, operation: x }; return A != null && (_.value = A), t.throwError(w, p.Yd.errors.NUMERIC_FAULT, _) } function y(w) { return new r(w, 36).toString(16) } function E(w) { return new r(w, 16).toString(36) } }, 93286: (I, l, e) => { "use strict"; e.d(l, { lE: () => s, zo: () => o, xs: () => E, E1: () => b, p3: () => y, $P: () => w, $m: () => A, Dv: () => m, _t: () => a, Zq: () => r, A7: () => u, N: () => _, G1: () => c }); var n = e(80711); const v = "bytes/5.5.0", d = new n.Yd(v); function p(j) { return !!j.toHexString } function i(j) { return j.slice || (j.slice = function () { const D = Array.prototype.slice.call(arguments); return i(new Uint8Array(Array.prototype.slice.apply(j, D))) }), j } function r(j) { return u(j) && !(j.length % 2) || a(j) } function t(j) { return typeof j == "number" && j == j && j % 1 === 0 } function a(j) { if (j == null) return !1; if (j.constructor === Uint8Array) return !0; if (typeof j == "string" || !t(j.length) || j.length < 0) return !1; for (let D = 0; D < j.length; D++) { const Y = j[D]; if (!t(Y) || Y < 0 || Y >= 256) return !1 } return !0 } function s(j, D) { if (D || (D = {}), typeof j == "number") { d.checkSafeUint53(j, "invalid arrayify value"); const Y = []; for (; j;)Y.unshift(j & 255), j = parseInt(String(j / 256)); return Y.length === 0 && Y.push(0), i(new Uint8Array(Y)) } if (D.allowMissingPrefix && typeof j == "string" && j.substring(0, 2) !== "0x" && (j = "0x" + j), p(j) && (j = j.toHexString()), u(j)) { let Y = j.substring(2); Y.length % 2 && (D.hexPad === "left" ? Y = "0x0" + Y.substring(2) : D.hexPad === "right" ? Y += "0" : d.throwArgumentError("hex data is odd-length", "value", j)); const V = []; for (let T = 0; T < Y.length; T += 2)V.push(parseInt(Y.substring(T, T + 2), 16)); return i(new Uint8Array(V)) } return a(j) ? i(new Uint8Array(j)) : d.throwArgumentError("invalid arrayify value", "value", j) } function o(j) { const D = j.map(T => s(T)), Y = D.reduce((T, C) => T + C.length, 0), V = new Uint8Array(Y); return D.reduce((T, C) => (V.set(C, T), T + C.length), 0), i(V) } function c(j) { let D = s(j); if (D.length === 0) return D; let Y = 0; for (; Y < D.length && D[Y] === 0;)Y++; return Y && (D = D.slice(Y)), D } function f(j, D) { j = s(j), j.length > D && d.throwArgumentError("value out of range", "value", arguments[0]); const Y = new Uint8Array(D); return Y.set(j, D - j.length), i(Y) } function u(j, D) { return !(typeof j != "string" || !j.match(/^0x[0-9A-Fa-f]*$/) || D && j.length !== 2 + 2 * D) } const h = "0123456789abcdef"; function m(j, D) { if (D || (D = {}), typeof j == "number") { d.checkSafeUint53(j, "invalid hexlify value"); let Y = ""; for (; j;)Y = h[j & 15] + Y, j = Math.floor(j / 16); return Y.length ? (Y.length % 2 && (Y = "0" + Y), "0x" + Y) : "0x00" } if (typeof j == "bigint") return j = j.toString(16), j.length % 2 ? "0x0" + j : "0x" + j; if (D.allowMissingPrefix && typeof j == "string" && j.substring(0, 2) !== "0x" && (j = "0x" + j), p(j)) return j.toHexString(); if (u(j)) return j.length % 2 && (D.hexPad === "left" ? j = "0x0" + j.substring(2) : D.hexPad === "right" ? j += "0" : d.throwArgumentError("hex data is odd-length", "value", j)), j.toLowerCase(); if (a(j)) { let Y = "0x"; for (let V = 0; V < j.length; V++) { let T = j[V]; Y += h[(T & 240) >> 4] + h[T & 15] } return Y } return d.throwArgumentError("invalid hexlify value", "value", j) } function b(j) { if (typeof j != "string") j = m(j); else if (!u(j) || j.length % 2) return null; return (j.length - 2) / 2 } function y(j, D, Y) { return typeof j != "string" ? j = m(j) : (!u(j) || j.length % 2) && d.throwArgumentError("invalid hexData", "value", j), D = 2 + 2 * D, Y != null ? "0x" + j.substring(D, 2 + 2 * Y) : "0x" + j.substring(D) } function E(j) { let D = "0x"; return j.forEach(Y => { D += m(Y).substring(2) }), D } function w(j) { const D = x(m(j, { hexPad: "left" })); return D === "0x" ? "0x0" : D } function x(j) { typeof j != "string" && (j = m(j)), u(j) || d.throwArgumentError("invalid hex string", "value", j), j = j.substring(2); let D = 0; for (; D < j.length && j[D] === "0";)D++; return "0x" + j.substring(D) } function A(j, D) { for (typeof j != "string" ? j = m(j) : u(j) || d.throwArgumentError("invalid hex string", "value", j), j.length > 2 * D + 2 && d.throwArgumentError("value out of range", "value", arguments[1]); j.length < 2 * D + 2;)j = "0x0" + j.substring(2); return j } function _(j) { const D = { r: "0x", s: "0x", _vs: "0x", recoveryParam: 0, v: 0 }; if (r(j)) { const Y = s(j); Y.length !== 65 && d.throwArgumentError("invalid signature string; must be 65 bytes", "signature", j), D.r = m(Y.slice(0, 32)), D.s = m(Y.slice(32, 64)), D.v = Y[64], D.v < 27 && (D.v === 0 || D.v === 1 ? D.v += 27 : d.throwArgumentError("signature invalid v byte", "signature", j)), D.recoveryParam = 1 - D.v % 2, D.recoveryParam && (Y[32] |= 128), D._vs = m(Y.slice(32, 64)) } else { if (D.r = j.r, D.s = j.s, D.v = j.v, D.recoveryParam = j.recoveryParam, D._vs = j._vs, D._vs != null) { const T = f(s(D._vs), 32); D._vs = m(T); const C = T[0] >= 128 ? 1 : 0; D.recoveryParam == null ? D.recoveryParam = C : D.recoveryParam !== C && d.throwArgumentError("signature recoveryParam mismatch _vs", "signature", j), T[0] &= 127; const B = m(T); D.s == null ? D.s = B : D.s !== B && d.throwArgumentError("signature v mismatch _vs", "signature", j) } if (D.recoveryParam == null) D.v == null ? d.throwArgumentError("signature missing v and recoveryParam", "signature", j) : D.v === 0 || D.v === 1 ? D.recoveryParam = D.v : D.recoveryParam = 1 - D.v % 2; else if (D.v == null) D.v = 27 + D.recoveryParam; else { const T = D.v === 0 || D.v === 1 ? D.v : 1 - D.v % 2; D.recoveryParam !== T && d.throwArgumentError("signature recoveryParam mismatch v", "signature", j) } D.r == null || !u(D.r) ? d.throwArgumentError("signature missing or invalid r", "signature", j) : D.r = A(D.r, 32), D.s == null || !u(D.s) ? d.throwArgumentError("signature missing or invalid s", "signature", j) : D.s = A(D.s, 32); const Y = s(D.s); Y[0] >= 128 && d.throwArgumentError("signature s out of range", "signature", j), D.recoveryParam && (Y[0] |= 128); const V = m(Y); D._vs && (u(D._vs) || d.throwArgumentError("signature invalid _vs", "signature", j), D._vs = A(D._vs, 32)), D._vs == null ? D._vs = V : D._vs !== V && d.throwArgumentError("signature _vs mismatch v and s", "signature", j) } return D } function k(j) { return j = _(j), m(o([j.r, j.s, j.recoveryParam ? "0x1c" : "0x1b"])) } }, 21046: (I, l, e) => { "use strict"; e.d(l, { Bz: () => t, _Y: () => d, fh: () => p, tL: () => v }); var n = e(15154); const v = n.O$.from(-1), d = n.O$.from(0), p = n.O$.from(1), i = null, r = null, t = n.O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), a = null, s = null }, 38197: (I, l, e) => { "use strict"; e.d(l, { w: () => p }); var n = e(91094), v = e.n(n), d = e(93286); function p(i) { return "0x" + v().keccak_256((0, d.lE)(i)) } }, 80711: (I, l, e) => { "use strict"; e.d(l, { Yd: () => u }); const n = "logger/5.5.0"; var v = e(25108); let d = !1, p = !1; const i = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 }; let r = i.default, t = null; function a() { try { const h = []; if (["NFD", "NFC", "NFKD", "NFKC"].forEach(m => { try { if ("test".normalize(m) !== "test") throw new Error("bad normalize") } catch (b) { h.push(m) } }), h.length) throw new Error("missing " + h.join(", ")); if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation") } catch (h) { return h.message } return null } const s = a(); var o; (function (h) { h.DEBUG = "DEBUG", h.INFO = "INFO", h.WARNING = "WARNING", h.ERROR = "ERROR", h.OFF = "OFF" })(o || (o = {})); var c; (function (h) { h.UNKNOWN_ERROR = "UNKNOWN_ERROR", h.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", h.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", h.NETWORK_ERROR = "NETWORK_ERROR", h.SERVER_ERROR = "SERVER_ERROR", h.TIMEOUT = "TIMEOUT", h.BUFFER_OVERRUN = "BUFFER_OVERRUN", h.NUMERIC_FAULT = "NUMERIC_FAULT", h.MISSING_NEW = "MISSING_NEW", h.INVALID_ARGUMENT = "INVALID_ARGUMENT", h.MISSING_ARGUMENT = "MISSING_ARGUMENT", h.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", h.CALL_EXCEPTION = "CALL_EXCEPTION", h.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", h.NONCE_EXPIRED = "NONCE_EXPIRED", h.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", h.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", h.TRANSACTION_REPLACED = "TRANSACTION_REPLACED" })(c || (c = {})); const f = "0123456789abcdef"; class u { constructor(m) { Object.defineProperty(this, "version", { enumerable: !0, value: m, writable: !1 }) } _log(m, b) { const y = m.toLowerCase(); i[y] == null && this.throwArgumentError("invalid log level name", "logLevel", m), !(r > i[y]) && v.log.apply(v, b) } debug(...m) { this._log(u.levels.DEBUG, m) } info(...m) { this._log(u.levels.INFO, m) } warn(...m) { this._log(u.levels.WARNING, m) } makeError(m, b, y) { if (p) return this.makeError("censored error", b, {}); b || (b = u.errors.UNKNOWN_ERROR), y || (y = {}); const E = []; Object.keys(y).forEach(A => { const _ = y[A]; try { if (_ instanceof Uint8Array) { let k = ""; for (let j = 0; j < _.length; j++)k += f[_[j] >> 4], k += f[_[j] & 15]; E.push(A + "=Uint8Array(0x" + k + ")") } else E.push(A + "=" + JSON.stringify(_)) } catch (k) { E.push(A + "=" + JSON.stringify(y[A].toString())) } }), E.push(`code=${b}`), E.push(`version=${this.version}`); const w = m; E.length && (m += " (" + E.join(", ") + ")"); const x = new Error(m); return x.reason = w, x.code = b, Object.keys(y).forEach(function (A) { x[A] = y[A] }), x } throwError(m, b, y) { throw this.makeError(m, b, y) } throwArgumentError(m, b, y) { return this.throwError(m, u.errors.INVALID_ARGUMENT, { argument: b, value: y }) } assert(m, b, y, E) { m || this.throwError(b, y, E) } assertArgument(m, b, y, E) { m || this.throwArgumentError(b, y, E) } checkNormalize(m) { m == null && (m = "platform missing String.prototype.normalize"), s && this.throwError("platform missing String.prototype.normalize", u.errors.UNSUPPORTED_OPERATION, { operation: "String.prototype.normalize", form: s }) } checkSafeUint53(m, b) { typeof m == "number" && (b == null && (b = "value not safe"), (m < 0 || m >= 9007199254740991) && this.throwError(b, u.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "out-of-safe-range", value: m }), m % 1 && this.throwError(b, u.errors.NUMERIC_FAULT, { operation: "checkSafeInteger", fault: "non-integer", value: m })) } checkArgumentCount(m, b, y) { y ? y = ": " + y : y = "", m < b && this.throwError("missing argument" + y, u.errors.MISSING_ARGUMENT, { count: m, expectedCount: b }), m > b && this.throwError("too many arguments" + y, u.errors.UNEXPECTED_ARGUMENT, { count: m, expectedCount: b }) } checkNew(m, b) { (m === Object || m == null) && this.throwError("missing new", u.errors.MISSING_NEW, { name: b.name }) } checkAbstract(m, b) { m === b ? this.throwError("cannot instantiate abstract class " + JSON.stringify(b.name) + " directly; use a sub-class", u.errors.UNSUPPORTED_OPERATION, { name: m.name, operation: "new" }) : (m === Object || m == null) && this.throwError("missing new", u.errors.MISSING_NEW, { name: b.name }) } static globalLogger() { return t || (t = new u(n)), t } static setCensorship(m, b) { if (!m && b && this.globalLogger().throwError("cannot permanently disable censorship", u.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }), d) { if (!m) return; this.globalLogger().throwError("error censorship permanent", u.errors.UNSUPPORTED_OPERATION, { operation: "setCensorship" }) } p = !!m, d = !!b } static setLogLevel(m) { const b = i[m.toLowerCase()]; if (b == null) { u.globalLogger().warn("invalid log level - " + m); return } r = b } static from(m) { return new u(m) } } u.errors = c, u.levels = o }, 53587: (I, l, e) => { "use strict"; e.d(l, { dk: () => h, uj: () => a, p$: () => u, zG: () => i, tu: () => r, mE: () => t, DC: () => s }); var n = e(80711); const v = "properties/5.5.0"; var d = function (m, b, y, E) { function w(x) { return x instanceof y ? x : new y(function (A) { A(x) }) } return new (y || (y = Promise))(function (x, A) { function _(D) { try { j(E.next(D)) } catch (Y) { A(Y) } } function k(D) { try { j(E.throw(D)) } catch (Y) { A(Y) } } function j(D) { D.done ? x(D.value) : w(D.value).then(_, k) } j((E = E.apply(m, b || [])).next()) }) }; const p = new n.Yd(v); function i(m, b, y) { Object.defineProperty(m, b, { enumerable: !0, value: y, writable: !1 }) } function r(m, b) { for (let y = 0; y < 32; y++) { if (m[b]) return m[b]; if (!m.prototype || typeof m.prototype != "object") break; m = Object.getPrototypeOf(m.prototype).constructor } return null } function t(m) { return d(this, void 0, void 0, function* () { const b = Object.keys(m).map(E => { const w = m[E]; return Promise.resolve(w).then(x => ({ key: E, value: x })) }); return (yield Promise.all(b)).reduce((E, w) => (E[w.key] = w.value, E), {}) }) } function a(m, b) { (!m || typeof m != "object") && p.throwArgumentError("invalid object", "object", m), Object.keys(m).forEach(y => { b[y] || p.throwArgumentError("invalid object key - " + y, "transaction:" + y, m) }) } function s(m) { const b = {}; for (const y in m) b[y] = m[y]; return b } const o = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 }; function c(m) { if (m == null || o[typeof m]) return !0; if (Array.isArray(m) || typeof m == "object") { if (!Object.isFrozen(m)) return !1; const b = Object.keys(m); for (let y = 0; y < b.length; y++) { let E = null; try { E = m[b[y]] } catch (w) { continue } if (!c(E)) return !1 } return !0 } return p.throwArgumentError(`Cannot deepCopy ${typeof m}`, "object", m) } function f(m) { if (c(m)) return m; if (Array.isArray(m)) return Object.freeze(m.map(b => u(b))); if (typeof m == "object") { const b = {}; for (const y in m) { const E = m[y]; E !== void 0 && i(b, y, u(E)) } return b } return p.throwArgumentError(`Cannot deepCopy ${typeof m}`, "object", m) } function u(m) { return f(m) } class h { constructor(b) { for (const y in b) this[y] = u(b[y]) } } }, 61843: (I, l, e) => { "use strict"; e.d(l, { J: () => c, c: () => a }); var n = e(93286), v = e(80711); const d = "rlp/5.5.0", p = new v.Yd(d); function i(f) { const u = []; for (; f;)u.unshift(f & 255), f >>= 8; return u } function r(f, u, h) { let m = 0; for (let b = 0; b < h; b++)m = m * 256 + f[u + b]; return m } function t(f) { if (Array.isArray(f)) { let m = []; if (f.forEach(function (y) { m = m.concat(t(y)) }), m.length <= 55) return m.unshift(192 + m.length), m; const b = i(m.length); return b.unshift(247 + b.length), b.concat(m) } (0, n.Zq)(f) || p.throwArgumentError("RLP object must be BytesLike", "object", f); const u = Array.prototype.slice.call((0, n.lE)(f)); if (u.length === 1 && u[0] <= 127) return u; if (u.length <= 55) return u.unshift(128 + u.length), u; const h = i(u.length); return h.unshift(183 + h.length), h.concat(u) } function a(f) { return (0, n.Dv)(t(f)) } function s(f, u, h, m) { const b = []; for (; h < u + 1 + m;) { const y = o(f, h); b.push(y.result), h += y.consumed, h > u + 1 + m && p.throwError("child data too short", v.Yd.errors.BUFFER_OVERRUN, {}) } return { consumed: 1 + m, result: b } } function o(f, u) { if (f.length === 0 && p.throwError("data too short", v.Yd.errors.BUFFER_OVERRUN, {}), f[u] >= 248) { const h = f[u] - 247; u + 1 + h > f.length && p.throwError("data short segment too short", v.Yd.errors.BUFFER_OVERRUN, {}); const m = r(f, u + 1, h); return u + 1 + h + m > f.length && p.throwError("data long segment too short", v.Yd.errors.BUFFER_OVERRUN, {}), s(f, u, u + 1 + h, h + m) } else if (f[u] >= 192) { const h = f[u] - 192; return u + 1 + h > f.length && p.throwError("data array too short", v.Yd.errors.BUFFER_OVERRUN, {}), s(f, u, u + 1, h) } else if (f[u] >= 184) { const h = f[u] - 183; u + 1 + h > f.length && p.throwError("data array too short", v.Yd.errors.BUFFER_OVERRUN, {}); const m = r(f, u + 1, h); u + 1 + h + m > f.length && p.throwError("data array too short", v.Yd.errors.BUFFER_OVERRUN, {}); const b = (0, n.Dv)(f.slice(u + 1 + h, u + 1 + h + m)); return { consumed: 1 + h + m, result: b } } else if (f[u] >= 128) { const h = f[u] - 128; u + 1 + h > f.length && p.throwError("data too short", v.Yd.errors.BUFFER_OVERRUN, {}); const m = (0, n.Dv)(f.slice(u + 1, u + 1 + h)); return { consumed: 1 + h, result: m } } return { consumed: 1, result: (0, n.Dv)(f[u]) } } function c(f) { const u = (0, n.lE)(f), h = o(u, 0); return h.consumed !== u.length && p.throwArgumentError("invalid rlp data", "data", f), h.result } }, 44242: (I, l, e) => { "use strict"; e.d(l, { Uj: () => i, uu: () => m, Y0: () => f, XL: () => y, ZN: () => b }); var n = e(93286), v = e(80711); const d = "strings/5.5.0", p = new v.Yd(d); var i; (function (E) { E.current = "", E.NFC = "NFC", E.NFD = "NFD", E.NFKC = "NFKC", E.NFKD = "NFKD" })(i || (i = {})); var r; (function (E) { E.UNEXPECTED_CONTINUE = "unexpected continuation byte", E.BAD_PREFIX = "bad codepoint prefix", E.OVERRUN = "string overrun", E.MISSING_CONTINUE = "missing continuation byte", E.OUT_OF_RANGE = "out of UTF-8 range", E.UTF16_SURROGATE = "UTF-16 surrogate", E.OVERLONG = "overlong representation" })(r || (r = {})); function t(E, w, x, A, _) { return p.throwArgumentError(`invalid codepoint at offset ${w}; ${E}`, "bytes", x) } function a(E, w, x, A, _) { if (E === r.BAD_PREFIX || E === r.UNEXPECTED_CONTINUE) { let k = 0; for (let j = w + 1; j < x.length && x[j] >> 6 === 2; j++)k++; return k } return E === r.OVERRUN ? x.length - w - 1 : 0 } function s(E, w, x, A, _) { return E === r.OVERLONG ? (A.push(_), 0) : (A.push(65533), a(E, w, x, A, _)) } const o = Object.freeze({ error: t, ignore: a, replace: s }); function c(E, w) { w == null && (w = o.error), E = (0, n.lE)(E); const x = []; let A = 0; for (; A < E.length;) { const _ = E[A++]; if (_ >> 7 === 0) { x.push(_); continue } let k = null, j = null; if ((_ & 224) === 192) k = 1, j = 127; else if ((_ & 240) === 224) k = 2, j = 2047; else if ((_ & 248) === 240) k = 3, j = 65535; else { (_ & 192) === 128 ? A += w(r.UNEXPECTED_CONTINUE, A - 1, E, x) : A += w(r.BAD_PREFIX, A - 1, E, x); continue } if (A - 1 + k >= E.length) { A += w(r.OVERRUN, A - 1, E, x); continue } let D = _ & (1 << 8 - k - 1) - 1; for (let Y = 0; Y < k; Y++) { let V = E[A]; if ((V & 192) != 128) { A += w(r.MISSING_CONTINUE, A, E, x), D = null; break } D = D << 6 | V & 63, A++ } if (D !== null) { if (D > 1114111) { A += w(r.OUT_OF_RANGE, A - 1 - k, E, x, D); continue } if (D >= 55296 && D <= 57343) { A += w(r.UTF16_SURROGATE, A - 1 - k, E, x, D); continue } if (D <= j) { A += w(r.OVERLONG, A - 1 - k, E, x, D); continue } x.push(D) } } return x } function f(E, w = i.current) { w != i.current && (p.checkNormalize(), E = E.normalize(w)); let x = []; for (let A = 0; A < E.length; A++) { const _ = E.charCodeAt(A); if (_ < 128) x.push(_); else if (_ < 2048) x.push(_ >> 6 | 192), x.push(_ & 63 | 128); else if ((_ & 64512) == 55296) { A++; const k = E.charCodeAt(A); if (A >= E.length || (k & 64512) !== 56320) throw new Error("invalid utf-8 string"); const j = 65536 + ((_ & 1023) << 10) + (k & 1023); x.push(j >> 18 | 240), x.push(j >> 12 & 63 | 128), x.push(j >> 6 & 63 | 128), x.push(j & 63 | 128) } else x.push(_ >> 12 | 224), x.push(_ >> 6 & 63 | 128), x.push(_ & 63 | 128) } return (0, n.lE)(x) } function u(E) { const w = "0000" + E.toString(16); return "\\u" + w.substring(w.length - 4) } function h(E, w) { return '"' + c(E, w).map(x => { if (x < 256) { switch (x) { case 8: return "\\b"; case 9: return "\\t"; case 10: return "\\n"; case 13: return "\\r"; case 34: return '\\"'; case 92: return "\\\\" }if (x >= 32 && x < 127) return String.fromCharCode(x) } return x <= 65535 ? u(x) : (x -= 65536, u((x >> 10 & 1023) + 55296) + u((x & 1023) + 56320)) }).join("") + '"' } function m(E) { return E.map(w => w <= 65535 ? String.fromCharCode(w) : (w -= 65536, String.fromCharCode((w >> 10 & 1023) + 55296, (w & 1023) + 56320))).join("") } function b(E, w) { return m(c(E, w)) } function y(E, w = i.current) { return c(f(E, w)) } }, 6094: (I, l, e) => { "use strict"; e.r(l), e.d(l, { TransactionTypes: () => Z, accessListify: () => Oe, computeAddress: () => je, parse: () => it, recoverAddress: () => ke, serialize: () => It }); var n = e(64594), v = e(15154), d = e(93286), p = e(21046), i = e(38197), r = e(53587), t = e(61843), a = e(13550), s = e.n(a), o = e(33715), c = e.n(o), f = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof e.g != "undefined" ? e.g : typeof self != "undefined" ? self : {}; function u(xe) { return xe && xe.__esModule && Object.prototype.hasOwnProperty.call(xe, "default") ? xe.default : xe } function h(xe, ne, le) { return le = { path: ne, exports: {}, require: function (Ne, tt) { return E(Ne, tt == null ? le.path : tt) } }, xe(le, le.exports), le.exports } function m(xe) { return xe && Object.prototype.hasOwnProperty.call(xe, "default") ? xe.default : xe } function b(xe) { return xe && Object.prototype.hasOwnProperty.call(xe, "default") && Object.keys(xe).length === 1 ? xe.default : xe } function y(xe) { if (xe.__esModule) return xe; var ne = Object.defineProperty({}, "__esModule", { value: !0 }); return Object.keys(xe).forEach(function (le) { var Ne = Object.getOwnPropertyDescriptor(xe, le); Object.defineProperty(ne, le, Ne.get ? Ne : { enumerable: !0, get: function () { return xe[le] } }) }), ne } function E() { throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs") } var w = x; function x(xe, ne) { if (!xe) throw new Error(ne || "Assertion failed") } x.equal = function (ne, le, Ne) { if (ne != le) throw new Error(Ne || "Assertion failed: " + ne + " != " + le) }; var A = h(function (xe, ne) { "use strict"; var le = ne; function Ne(Ot, Pt) { if (Array.isArray(Ot)) return Ot.slice(); if (!Ot) return []; var Rt = []; if (typeof Ot != "string") { for (var Jt = 0; Jt < Ot.length; Jt++)Rt[Jt] = Ot[Jt] | 0; return Rt } if (Pt === "hex") { Ot = Ot.replace(/[^a-z0-9]+/ig, ""), Ot.length % 2 !== 0 && (Ot = "0" + Ot); for (var Jt = 0; Jt < Ot.length; Jt += 2)Rt.push(parseInt(Ot[Jt] + Ot[Jt + 1], 16)) } else for (var Jt = 0; Jt < Ot.length; Jt++) { var Vt = Ot.charCodeAt(Jt), Bt = Vt >> 8, rr = Vt & 255; Bt ? Rt.push(Bt, rr) : Rt.push(rr) } return Rt } le.toArray = Ne; function tt(Ot) { return Ot.length === 1 ? "0" + Ot : Ot } le.zero2 = tt; function Et(Ot) { for (var Pt = "", Rt = 0; Rt < Ot.length; Rt++)Pt += tt(Ot[Rt].toString(16)); return Pt } le.toHex = Et, le.encode = function (Pt, Rt) { return Rt === "hex" ? Et(Pt) : Pt } }), _ = h(function (xe, ne) { "use strict"; var le = ne; le.assert = w, le.toArray = A.toArray, le.zero2 = A.zero2, le.toHex = A.toHex, le.encode = A.encode; function Ne(Rt, Jt, Vt) { var Bt = new Array(Math.max(Rt.bitLength(), Vt) + 1); Bt.fill(0); for (var rr = 1 << Jt + 1, br = Rt.clone(), lr = 0; lr < Bt.length; lr++) { var Lt, hr = br.andln(rr - 1); br.isOdd() ? (hr > (rr >> 1) - 1 ? Lt = (rr >> 1) - hr : Lt = hr, br.isubn(Lt)) : Lt = 0, Bt[lr] = Lt, br.iushrn(1) } return Bt } le.getNAF = Ne; function tt(Rt, Jt) { var Vt = [[], []]; Rt = Rt.clone(), Jt = Jt.clone(); for (var Bt = 0, rr = 0, br; Rt.cmpn(-Bt) > 0 || Jt.cmpn(-rr) > 0;) { var lr = Rt.andln(3) + Bt & 3, Lt = Jt.andln(3) + rr & 3; lr === 3 && (lr = -1), Lt === 3 && (Lt = -1); var hr; (lr & 1) === 0 ? hr = 0 : (br = Rt.andln(7) + Bt & 7, (br === 3 || br === 5) && Lt === 2 ? hr = -lr : hr = lr), Vt[0].push(hr); var sr; (Lt & 1) === 0 ? sr = 0 : (br = Jt.andln(7) + rr & 7, (br === 3 || br === 5) && lr === 2 ? sr = -Lt : sr = Lt), Vt[1].push(sr), 2 * Bt === hr + 1 && (Bt = 1 - Bt), 2 * rr === sr + 1 && (rr = 1 - rr), Rt.iushrn(1), Jt.iushrn(1) } return Vt } le.getJSF = tt; function Et(Rt, Jt, Vt) { var Bt = "_" + Jt; Rt.prototype[Jt] = function () { return this[Bt] !== void 0 ? this[Bt] : this[Bt] = Vt.call(this) } } le.cachedProperty = Et; function Ot(Rt) { return typeof Rt == "string" ? le.toArray(Rt, "hex") : Rt } le.parseBytes = Ot; function Pt(Rt) { return new (s())(Rt, "hex", "le") } le.intFromLE = Pt }), k = _.getNAF, j = _.getJSF, D = _.assert; function Y(xe, ne) { this.type = xe, this.p = new (s())(ne.p, 16), this.red = ne.prime ? s().red(ne.prime) : s().mont(this.p), this.zero = new (s())(0).toRed(this.red), this.one = new (s())(1).toRed(this.red), this.two = new (s())(2).toRed(this.red), this.n = ne.n && new (s())(ne.n, 16), this.g = ne.g && this.pointFromJSON(ne.g, ne.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0; var le = this.n && this.p.div(this.n); !le || le.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red)) } var V = Y; Y.prototype.point = function () { throw new Error("Not implemented") }, Y.prototype.validate = function () { throw new Error("Not implemented") }, Y.prototype._fixedNafMul = function (ne, le) { D(ne.precomputed); var Ne = ne._getDoubles(), tt = k(le, 1, this._bitLength), Et = (1 << Ne.step + 1) - (Ne.step % 2 === 0 ? 2 : 1); Et /= 3; var Ot = [], Pt, Rt; for (Pt = 0; Pt < tt.length; Pt += Ne.step) { Rt = 0; for (var Jt = Pt + Ne.step - 1; Jt >= Pt; Jt--)Rt = (Rt << 1) + tt[Jt]; Ot.push(Rt) } for (var Vt = this.jpoint(null, null, null), Bt = this.jpoint(null, null, null), rr = Et; rr > 0; rr--) { for (Pt = 0; Pt < Ot.length; Pt++)Rt = Ot[Pt], Rt === rr ? Bt = Bt.mixedAdd(Ne.points[Pt]) : Rt === -rr && (Bt = Bt.mixedAdd(Ne.points[Pt].neg())); Vt = Vt.add(Bt) } return Vt.toP() }, Y.prototype._wnafMul = function (ne, le) { var Ne = 4, tt = ne._getNAFPoints(Ne); Ne = tt.wnd; for (var Et = tt.points, Ot = k(le, Ne, this._bitLength), Pt = this.jpoint(null, null, null), Rt = Ot.length - 1; Rt >= 0; Rt--) { for (var Jt = 0; Rt >= 0 && Ot[Rt] === 0; Rt--)Jt++; if (Rt >= 0 && Jt++, Pt = Pt.dblp(Jt), Rt < 0) break; var Vt = Ot[Rt]; D(Vt !== 0), ne.type === "affine" ? Vt > 0 ? Pt = Pt.mixedAdd(Et[Vt - 1 >> 1]) : Pt = Pt.mixedAdd(Et[-Vt - 1 >> 1].neg()) : Vt > 0 ? Pt = Pt.add(Et[Vt - 1 >> 1]) : Pt = Pt.add(Et[-Vt - 1 >> 1].neg()) } return ne.type === "affine" ? Pt.toP() : Pt }, Y.prototype._wnafMulAdd = function (ne, le, Ne, tt, Et) { var Ot = this._wnafT1, Pt = this._wnafT2, Rt = this._wnafT3, Jt = 0, Vt, Bt, rr; for (Vt = 0; Vt < tt; Vt++) { rr = le[Vt]; var br = rr._getNAFPoints(ne); Ot[Vt] = br.wnd, Pt[Vt] = br.points } for (Vt = tt - 1; Vt >= 1; Vt -= 2) { var lr = Vt - 1, Lt = Vt; if (Ot[lr] !== 1 || Ot[Lt] !== 1) { Rt[lr] = k(Ne[lr], Ot[lr], this._bitLength), Rt[Lt] = k(Ne[Lt], Ot[Lt], this._bitLength), Jt = Math.max(Rt[lr].length, Jt), Jt = Math.max(Rt[Lt].length, Jt); continue } var hr = [le[lr], null, null, le[Lt]]; le[lr].y.cmp(le[Lt].y) === 0 ? (hr[1] = le[lr].add(le[Lt]), hr[2] = le[lr].toJ().mixedAdd(le[Lt].neg())) : le[lr].y.cmp(le[Lt].y.redNeg()) === 0 ? (hr[1] = le[lr].toJ().mixedAdd(le[Lt]), hr[2] = le[lr].add(le[Lt].neg())) : (hr[1] = le[lr].toJ().mixedAdd(le[Lt]), hr[2] = le[lr].toJ().mixedAdd(le[Lt].neg())); var sr = [-3, -1, -5, -7, 0, 7, 5, 1, 3], Ir = j(Ne[lr], Ne[Lt]); for (Jt = Math.max(Ir[0].length, Jt), Rt[lr] = new Array(Jt), Rt[Lt] = new Array(Jt), Bt = 0; Bt < Jt; Bt++) { var Tr = Ir[0][Bt] | 0, zr = Ir[1][Bt] | 0; Rt[lr][Bt] = sr[(Tr + 1) * 3 + (zr + 1)], Rt[Lt][Bt] = 0, Pt[lr] = hr } } var Mt = this.jpoint(null, null, null), Kr = this._wnafT4; for (Vt = Jt; Vt >= 0; Vt--) { for (var kr = 0; Vt >= 0;) { var yn = !0; for (Bt = 0; Bt < tt; Bt++)Kr[Bt] = Rt[Bt][Vt] | 0, Kr[Bt] !== 0 && (yn = !1); if (!yn) break; kr++, Vt-- } if (Vt >= 0 && kr++, Mt = Mt.dblp(kr), Vt < 0) break; for (Bt = 0; Bt < tt; Bt++) { var Yr = Kr[Bt]; Yr !== 0 && (Yr > 0 ? rr = Pt[Bt][Yr - 1 >> 1] : Yr < 0 && (rr = Pt[Bt][-Yr - 1 >> 1].neg()), rr.type === "affine" ? Mt = Mt.mixedAdd(rr) : Mt = Mt.add(rr)) } } for (Vt = 0; Vt < tt; Vt++)Pt[Vt] = null; return Et ? Mt : Mt.toP() }; function T(xe, ne) { this.curve = xe, this.type = ne, this.precomputed = null } Y.BasePoint = T, T.prototype.eq = function () { throw new Error("Not implemented") }, T.prototype.validate = function () { return this.curve.validate(this) }, Y.prototype.decodePoint = function (ne, le) { ne = _.toArray(ne, le); var Ne = this.p.byteLength(); if ((ne[0] === 4 || ne[0] === 6 || ne[0] === 7) && ne.length - 1 === 2 * Ne) { ne[0] === 6 ? D(ne[ne.length - 1] % 2 === 0) : ne[0] === 7 && D(ne[ne.length - 1] % 2 === 1); var tt = this.point(ne.slice(1, 1 + Ne), ne.slice(1 + Ne, 1 + 2 * Ne)); return tt } else if ((ne[0] === 2 || ne[0] === 3) && ne.length - 1 === Ne) return this.pointFromX(ne.slice(1, 1 + Ne), ne[0] === 3); throw new Error("Unknown point format") }, T.prototype.encodeCompressed = function (ne) { return this.encode(ne, !0) }, T.prototype._encode = function (ne) { var le = this.curve.p.byteLength(), Ne = this.getX().toArray("be", le); return ne ? [this.getY().isEven() ? 2 : 3].concat(Ne) : [4].concat(Ne, this.getY().toArray("be", le)) }, T.prototype.encode = function (ne, le) { return _.encode(this._encode(le), ne) }, T.prototype.precompute = function (ne) { if (this.precomputed) return this; var le = { doubles: null, naf: null, beta: null }; return le.naf = this._getNAFPoints(8), le.doubles = this._getDoubles(4, ne), le.beta = this._getBeta(), this.precomputed = le, this }, T.prototype._hasDoubles = function (ne) { if (!this.precomputed) return !1; var le = this.precomputed.doubles; return le ? le.points.length >= Math.ceil((ne.bitLength() + 1) / le.step) : !1 }, T.prototype._getDoubles = function (ne, le) { if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles; for (var Ne = [this], tt = this, Et = 0; Et < le; Et += ne) { for (var Ot = 0; Ot < ne; Ot++)tt = tt.dbl(); Ne.push(tt) } return { step: ne, points: Ne } }, T.prototype._getNAFPoints = function (ne) { if (this.precomputed && this.precomputed.naf) return this.precomputed.naf; for (var le = [this], Ne = (1 << ne) - 1, tt = Ne === 1 ? null : this.dbl(), Et = 1; Et < Ne; Et++)le[Et] = le[Et - 1].add(tt); return { wnd: ne, points: le } }, T.prototype._getBeta = function () { return null }, T.prototype.dblp = function (ne) { for (var le = this, Ne = 0; Ne < ne; Ne++)le = le.dbl(); return le }; var C = h(function (xe) { typeof Object.create == "function" ? xe.exports = function (le, Ne) { Ne && (le.super_ = Ne, le.prototype = Object.create(Ne.prototype, { constructor: { value: le, enumerable: !1, writable: !0, configurable: !0 } })) } : xe.exports = function (le, Ne) { if (Ne) { le.super_ = Ne; var tt = function () { }; tt.prototype = Ne.prototype, le.prototype = new tt, le.prototype.constructor = le } } }), B = _.assert; function P(xe) { V.call(this, "short", xe), this.a = new (s())(xe.a, 16).toRed(this.red), this.b = new (s())(xe.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(xe), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4) } C(P, V); var O = P; P.prototype._getEndomorphism = function (ne) { if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) { var le, Ne; if (ne.beta) le = new (s())(ne.beta, 16).toRed(this.red); else { var tt = this._getEndoRoots(this.p); le = tt[0].cmp(tt[1]) < 0 ? tt[0] : tt[1], le = le.toRed(this.red) } if (ne.lambda) Ne = new (s())(ne.lambda, 16); else { var Et = this._getEndoRoots(this.n); this.g.mul(Et[0]).x.cmp(this.g.x.redMul(le)) === 0 ? Ne = Et[0] : (Ne = Et[1], B(this.g.mul(Ne).x.cmp(this.g.x.redMul(le)) === 0)) } var Ot; return ne.basis ? Ot = ne.basis.map(function (Pt) { return { a: new (s())(Pt.a, 16), b: new (s())(Pt.b, 16) } }) : Ot = this._getEndoBasis(Ne), { beta: le, lambda: Ne, basis: Ot } } }, P.prototype._getEndoRoots = function (ne) { var le = ne === this.p ? this.red : s().mont(ne), Ne = new (s())(2).toRed(le).redInvm(), tt = Ne.redNeg(), Et = new (s())(3).toRed(le).redNeg().redSqrt().redMul(Ne), Ot = tt.redAdd(Et).fromRed(), Pt = tt.redSub(Et).fromRed(); return [Ot, Pt] }, P.prototype._getEndoBasis = function (ne) { for (var le = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), Ne = ne, tt = this.n.clone(), Et = new (s())(1), Ot = new (s())(0), Pt = new (s())(0), Rt = new (s())(1), Jt, Vt, Bt, rr, br, lr, Lt, hr = 0, sr, Ir; Ne.cmpn(0) !== 0;) { var Tr = tt.div(Ne); sr = tt.sub(Tr.mul(Ne)), Ir = Pt.sub(Tr.mul(Et)); var zr = Rt.sub(Tr.mul(Ot)); if (!Bt && sr.cmp(le) < 0) Jt = Lt.neg(), Vt = Et, Bt = sr.neg(), rr = Ir; else if (Bt && ++hr === 2) break; Lt = sr, tt = Ne, Ne = sr, Pt = Et, Et = Ir, Rt = Ot, Ot = zr } br = sr.neg(), lr = Ir; var Mt = Bt.sqr().add(rr.sqr()), Kr = br.sqr().add(lr.sqr()); return Kr.cmp(Mt) >= 0 && (br = Jt, lr = Vt), Bt.negative && (Bt = Bt.neg(), rr = rr.neg()), br.negative && (br = br.neg(), lr = lr.neg()), [{ a: Bt, b: rr }, { a: br, b: lr }] }, P.prototype._endoSplit = function (ne) { var le = this.endo.basis, Ne = le[0], tt = le[1], Et = tt.b.mul(ne).divRound(this.n), Ot = Ne.b.neg().mul(ne).divRound(this.n), Pt = Et.mul(Ne.a), Rt = Ot.mul(tt.a), Jt = Et.mul(Ne.b), Vt = Ot.mul(tt.b), Bt = ne.sub(Pt).sub(Rt), rr = Jt.add(Vt).neg(); return { k1: Bt, k2: rr } }, P.prototype.pointFromX = function (ne, le) { ne = new (s())(ne, 16), ne.red || (ne = ne.toRed(this.red)); var Ne = ne.redSqr().redMul(ne).redIAdd(ne.redMul(this.a)).redIAdd(this.b), tt = Ne.redSqrt(); if (tt.redSqr().redSub(Ne).cmp(this.zero) !== 0) throw new Error("invalid point"); var Et = tt.fromRed().isOdd(); return (le && !Et || !le && Et) && (tt = tt.redNeg()), this.point(ne, tt) }, P.prototype.validate = function (ne) { if (ne.inf) return !0; var le = ne.x, Ne = ne.y, tt = this.a.redMul(le), Et = le.redSqr().redMul(le).redIAdd(tt).redIAdd(this.b); return Ne.redSqr().redISub(Et).cmpn(0) === 0 }, P.prototype._endoWnafMulAdd = function (ne, le, Ne) { for (var tt = this._endoWnafT1, Et = this._endoWnafT2, Ot = 0; Ot < ne.length; Ot++) { var Pt = this._endoSplit(le[Ot]), Rt = ne[Ot], Jt = Rt._getBeta(); Pt.k1.negative && (Pt.k1.ineg(), Rt = Rt.neg(!0)), Pt.k2.negative && (Pt.k2.ineg(), Jt = Jt.neg(!0)), tt[Ot * 2] = Rt, tt[Ot * 2 + 1] = Jt, Et[Ot * 2] = Pt.k1, Et[Ot * 2 + 1] = Pt.k2 } for (var Vt = this._wnafMulAdd(1, tt, Et, Ot * 2, Ne), Bt = 0; Bt < Ot * 2; Bt++)tt[Bt] = null, Et[Bt] = null; return Vt }; function F(xe, ne, le, Ne) { V.BasePoint.call(this, xe, "affine"), ne === null && le === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new (s())(ne, 16), this.y = new (s())(le, 16), Ne && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1) } C(F, V.BasePoint), P.prototype.point = function (ne, le, Ne) { return new F(this, ne, le, Ne) }, P.prototype.pointFromJSON = function (ne, le) { return F.fromJSON(this, ne, le) }, F.prototype._getBeta = function () { if (!!this.curve.endo) { var ne = this.precomputed; if (ne && ne.beta) return ne.beta; var le = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y); if (ne) { var Ne = this.curve, tt = function (Et) { return Ne.point(Et.x.redMul(Ne.endo.beta), Et.y) }; ne.beta = le, le.precomputed = { beta: null, naf: ne.naf && { wnd: ne.naf.wnd, points: ne.naf.points.map(tt) }, doubles: ne.doubles && { step: ne.doubles.step, points: ne.doubles.points.map(tt) } } } return le } }, F.prototype.toJSON = function () { return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y] }, F.fromJSON = function (ne, le, Ne) { typeof le == "string" && (le = JSON.parse(le)); var tt = ne.point(le[0], le[1], Ne); if (!le[2]) return tt; function Et(Pt) { return ne.point(Pt[0], Pt[1], Ne) } var Ot = le[2]; return tt.precomputed = { beta: null, doubles: Ot.doubles && { step: Ot.doubles.step, points: [tt].concat(Ot.doubles.points.map(Et)) }, naf: Ot.naf && { wnd: Ot.naf.wnd, points: [tt].concat(Ot.naf.points.map(Et)) } }, tt }, F.prototype.inspect = function () { return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">" }, F.prototype.isInfinity = function () { return this.inf }, F.prototype.add = function (ne) { if (this.inf) return ne; if (ne.inf) return this; if (this.eq(ne)) return this.dbl(); if (this.neg().eq(ne)) return this.curve.point(null, null); if (this.x.cmp(ne.x) === 0) return this.curve.point(null, null); var le = this.y.redSub(ne.y); le.cmpn(0) !== 0 && (le = le.redMul(this.x.redSub(ne.x).redInvm())); var Ne = le.redSqr().redISub(this.x).redISub(ne.x), tt = le.redMul(this.x.redSub(Ne)).redISub(this.y); return this.curve.point(Ne, tt) }, F.prototype.dbl = function () { if (this.inf) return this; var ne = this.y.redAdd(this.y); if (ne.cmpn(0) === 0) return this.curve.point(null, null); var le = this.curve.a, Ne = this.x.redSqr(), tt = ne.redInvm(), Et = Ne.redAdd(Ne).redIAdd(Ne).redIAdd(le).redMul(tt), Ot = Et.redSqr().redISub(this.x.redAdd(this.x)), Pt = Et.redMul(this.x.redSub(Ot)).redISub(this.y); return this.curve.point(Ot, Pt) }, F.prototype.getX = function () { return this.x.fromRed() }, F.prototype.getY = function () { return this.y.fromRed() }, F.prototype.mul = function (ne) { return ne = new (s())(ne, 16), this.isInfinity() ? this : this._hasDoubles(ne) ? this.curve._fixedNafMul(this, ne) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [ne]) : this.curve._wnafMul(this, ne) }, F.prototype.mulAdd = function (ne, le, Ne) { var tt = [this, le], Et = [ne, Ne]; return this.curve.endo ? this.curve._endoWnafMulAdd(tt, Et) : this.curve._wnafMulAdd(1, tt, Et, 2) }, F.prototype.jmulAdd = function (ne, le, Ne) { var tt = [this, le], Et = [ne, Ne]; return this.curve.endo ? this.curve._endoWnafMulAdd(tt, Et, !0) : this.curve._wnafMulAdd(1, tt, Et, 2, !0) }, F.prototype.eq = function (ne) { return this === ne || this.inf === ne.inf && (this.inf || this.x.cmp(ne.x) === 0 && this.y.cmp(ne.y) === 0) }, F.prototype.neg = function (ne) { if (this.inf) return this; var le = this.curve.point(this.x, this.y.redNeg()); if (ne && this.precomputed) { var Ne = this.precomputed, tt = function (Et) { return Et.neg() }; le.precomputed = { naf: Ne.naf && { wnd: Ne.naf.wnd, points: Ne.naf.points.map(tt) }, doubles: Ne.doubles && { step: Ne.doubles.step, points: Ne.doubles.points.map(tt) } } } return le }, F.prototype.toJ = function () { if (this.inf) return this.curve.jpoint(null, null, null); var ne = this.curve.jpoint(this.x, this.y, this.curve.one); return ne }; function W(xe, ne, le, Ne) { V.BasePoint.call(this, xe, "jacobian"), ne === null && le === null && Ne === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new (s())(0)) : (this.x = new (s())(ne, 16), this.y = new (s())(le, 16), this.z = new (s())(Ne, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one } C(W, V.BasePoint), P.prototype.jpoint = function (ne, le, Ne) { return new W(this, ne, le, Ne) }, W.prototype.toP = function () { if (this.isInfinity()) return this.curve.point(null, null); var ne = this.z.redInvm(), le = ne.redSqr(), Ne = this.x.redMul(le), tt = this.y.redMul(le).redMul(ne); return this.curve.point(Ne, tt) }, W.prototype.neg = function () { return this.curve.jpoint(this.x, this.y.redNeg(), this.z) }, W.prototype.add = function (ne) { if (this.isInfinity()) return ne; if (ne.isInfinity()) return this; var le = ne.z.redSqr(), Ne = this.z.redSqr(), tt = this.x.redMul(le), Et = ne.x.redMul(Ne), Ot = this.y.redMul(le.redMul(ne.z)), Pt = ne.y.redMul(Ne.redMul(this.z)), Rt = tt.redSub(Et), Jt = Ot.redSub(Pt); if (Rt.cmpn(0) === 0) return Jt.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl(); var Vt = Rt.redSqr(), Bt = Vt.redMul(Rt), rr = tt.redMul(Vt), br = Jt.redSqr().redIAdd(Bt).redISub(rr).redISub(rr), lr = Jt.redMul(rr.redISub(br)).redISub(Ot.redMul(Bt)), Lt = this.z.redMul(ne.z).redMul(Rt); return this.curve.jpoint(br, lr, Lt) }, W.prototype.mixedAdd = function (ne) { if (this.isInfinity()) return ne.toJ(); if (ne.isInfinity()) return this; var le = this.z.redSqr(), Ne = this.x, tt = ne.x.redMul(le), Et = this.y, Ot = ne.y.redMul(le).redMul(this.z), Pt = Ne.redSub(tt), Rt = Et.redSub(Ot); if (Pt.cmpn(0) === 0) return Rt.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl(); var Jt = Pt.redSqr(), Vt = Jt.redMul(Pt), Bt = Ne.redMul(Jt), rr = Rt.redSqr().redIAdd(Vt).redISub(Bt).redISub(Bt), br = Rt.redMul(Bt.redISub(rr)).redISub(Et.redMul(Vt)), lr = this.z.redMul(Pt); return this.curve.jpoint(rr, br, lr) }, W.prototype.dblp = function (ne) { if (ne === 0) return this; if (this.isInfinity()) return this; if (!ne) return this.dbl(); var le; if (this.curve.zeroA || this.curve.threeA) { var Ne = this; for (le = 0; le < ne; le++)Ne = Ne.dbl(); return Ne } var tt = this.curve.a, Et = this.curve.tinv, Ot = this.x, Pt = this.y, Rt = this.z, Jt = Rt.redSqr().redSqr(), Vt = Pt.redAdd(Pt); for (le = 0; le < ne; le++) { var Bt = Ot.redSqr(), rr = Vt.redSqr(), br = rr.redSqr(), lr = Bt.redAdd(Bt).redIAdd(Bt).redIAdd(tt.redMul(Jt)), Lt = Ot.redMul(rr), hr = lr.redSqr().redISub(Lt.redAdd(Lt)), sr = Lt.redISub(hr), Ir = lr.redMul(sr); Ir = Ir.redIAdd(Ir).redISub(br); var Tr = Vt.redMul(Rt); le + 1 < ne && (Jt = Jt.redMul(br)), Ot = hr, Rt = Tr, Vt = Ir } return this.curve.jpoint(Ot, Vt.redMul(Et), Rt) }, W.prototype.dbl = function () { return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl() }, W.prototype._zeroDbl = function () { var ne, le, Ne; if (this.zOne) { var tt = this.x.redSqr(), Et = this.y.redSqr(), Ot = Et.redSqr(), Pt = this.x.redAdd(Et).redSqr().redISub(tt).redISub(Ot); Pt = Pt.redIAdd(Pt); var Rt = tt.redAdd(tt).redIAdd(tt), Jt = Rt.redSqr().redISub(Pt).redISub(Pt), Vt = Ot.redIAdd(Ot); Vt = Vt.redIAdd(Vt), Vt = Vt.redIAdd(Vt), ne = Jt, le = Rt.redMul(Pt.redISub(Jt)).redISub(Vt), Ne = this.y.redAdd(this.y) } else { var Bt = this.x.redSqr(), rr = this.y.redSqr(), br = rr.redSqr(), lr = this.x.redAdd(rr).redSqr().redISub(Bt).redISub(br); lr = lr.redIAdd(lr); var Lt = Bt.redAdd(Bt).redIAdd(Bt), hr = Lt.redSqr(), sr = br.redIAdd(br); sr = sr.redIAdd(sr), sr = sr.redIAdd(sr), ne = hr.redISub(lr).redISub(lr), le = Lt.redMul(lr.redISub(ne)).redISub(sr), Ne = this.y.redMul(this.z), Ne = Ne.redIAdd(Ne) } return this.curve.jpoint(ne, le, Ne) }, W.prototype._threeDbl = function () { var ne, le, Ne; if (this.zOne) { var tt = this.x.redSqr(), Et = this.y.redSqr(), Ot = Et.redSqr(), Pt = this.x.redAdd(Et).redSqr().redISub(tt).redISub(Ot); Pt = Pt.redIAdd(Pt); var Rt = tt.redAdd(tt).redIAdd(tt).redIAdd(this.curve.a), Jt = Rt.redSqr().redISub(Pt).redISub(Pt); ne = Jt; var Vt = Ot.redIAdd(Ot); Vt = Vt.redIAdd(Vt), Vt = Vt.redIAdd(Vt), le = Rt.redMul(Pt.redISub(Jt)).redISub(Vt), Ne = this.y.redAdd(this.y) } else { var Bt = this.z.redSqr(), rr = this.y.redSqr(), br = this.x.redMul(rr), lr = this.x.redSub(Bt).redMul(this.x.redAdd(Bt)); lr = lr.redAdd(lr).redIAdd(lr); var Lt = br.redIAdd(br); Lt = Lt.redIAdd(Lt); var hr = Lt.redAdd(Lt); ne = lr.redSqr().redISub(hr), Ne = this.y.redAdd(this.z).redSqr().redISub(rr).redISub(Bt); var sr = rr.redSqr(); sr = sr.redIAdd(sr), sr = sr.redIAdd(sr), sr = sr.redIAdd(sr), le = lr.redMul(Lt.redISub(ne)).redISub(sr) } return this.curve.jpoint(ne, le, Ne) }, W.prototype._dbl = function () { var ne = this.curve.a, le = this.x, Ne = this.y, tt = this.z, Et = tt.redSqr().redSqr(), Ot = le.redSqr(), Pt = Ne.redSqr(), Rt = Ot.redAdd(Ot).redIAdd(Ot).redIAdd(ne.redMul(Et)), Jt = le.redAdd(le); Jt = Jt.redIAdd(Jt); var Vt = Jt.redMul(Pt), Bt = Rt.redSqr().redISub(Vt.redAdd(Vt)), rr = Vt.redISub(Bt), br = Pt.redSqr(); br = br.redIAdd(br), br = br.redIAdd(br), br = br.redIAdd(br); var lr = Rt.redMul(rr).redISub(br), Lt = Ne.redAdd(Ne).redMul(tt); return this.curve.jpoint(Bt, lr, Lt) }, W.prototype.trpl = function () { if (!this.curve.zeroA) return this.dbl().add(this); var ne = this.x.redSqr(), le = this.y.redSqr(), Ne = this.z.redSqr(), tt = le.redSqr(), Et = ne.redAdd(ne).redIAdd(ne), Ot = Et.redSqr(), Pt = this.x.redAdd(le).redSqr().redISub(ne).redISub(tt); Pt = Pt.redIAdd(Pt), Pt = Pt.redAdd(Pt).redIAdd(Pt), Pt = Pt.redISub(Ot); var Rt = Pt.redSqr(), Jt = tt.redIAdd(tt); Jt = Jt.redIAdd(Jt), Jt = Jt.redIAdd(Jt), Jt = Jt.redIAdd(Jt); var Vt = Et.redIAdd(Pt).redSqr().redISub(Ot).redISub(Rt).redISub(Jt), Bt = le.redMul(Vt); Bt = Bt.redIAdd(Bt), Bt = Bt.redIAdd(Bt); var rr = this.x.redMul(Rt).redISub(Bt); rr = rr.redIAdd(rr), rr = rr.redIAdd(rr); var br = this.y.redMul(Vt.redMul(Jt.redISub(Vt)).redISub(Pt.redMul(Rt))); br = br.redIAdd(br), br = br.redIAdd(br), br = br.redIAdd(br); var lr = this.z.redAdd(Pt).redSqr().redISub(Ne).redISub(Rt); return this.curve.jpoint(rr, br, lr) }, W.prototype.mul = function (ne, le) { return ne = new (s())(ne, le), this.curve._wnafMul(this, ne) }, W.prototype.eq = function (ne) { if (ne.type === "affine") return this.eq(ne.toJ()); if (this === ne) return !0; var le = this.z.redSqr(), Ne = ne.z.redSqr(); if (this.x.redMul(Ne).redISub(ne.x.redMul(le)).cmpn(0) !== 0) return !1; var tt = le.redMul(this.z), Et = Ne.redMul(ne.z); return this.y.redMul(Et).redISub(ne.y.redMul(tt)).cmpn(0) === 0 }, W.prototype.eqXToP = function (ne) { var le = this.z.redSqr(), Ne = ne.toRed(this.curve.red).redMul(le); if (this.x.cmp(Ne) === 0) return !0; for (var tt = ne.clone(), Et = this.curve.redN.redMul(le); ;) { if (tt.iadd(this.curve.n), tt.cmp(this.curve.p) >= 0) return !1; if (Ne.redIAdd(Et), this.x.cmp(Ne) === 0) return !0 } }, W.prototype.inspect = function () { return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">" }, W.prototype.isInfinity = function () { return this.z.cmpn(0) === 0 }; var $ = h(function (xe, ne) { "use strict"; var le = ne; le.base = V, le.short = O, le.mont = null, le.edwards = null }), L = h(function (xe, ne) { "use strict"; var le = ne, Ne = _.assert; function tt(Pt) { Pt.type === "short" ? this.curve = new $.short(Pt) : Pt.type === "edwards" ? this.curve = new $.edwards(Pt) : this.curve = new $.mont(Pt), this.g = this.curve.g, this.n = this.curve.n, this.hash = Pt.hash, Ne(this.g.validate(), "Invalid curve"), Ne(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O") } le.PresetCurve = tt; function Et(Pt, Rt) { Object.defineProperty(le, Pt, { configurable: !0, enumerable: !0, get: function () { var Jt = new tt(Rt); return Object.defineProperty(le, Pt, { configurable: !0, enumerable: !0, value: Jt }), Jt } }) } Et("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: c().sha256, gRed: !1, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), Et("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: c().sha256, gRed: !1, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), Et("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: c().sha256, gRed: !1, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), Et("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: c().sha384, gRed: !1, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), Et("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: c().sha512, gRed: !1, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), Et("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: c().sha256, gRed: !1, g: ["9"] }), Et("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: c().sha256, gRed: !1, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] }); var Ot; try { Ot = null.crash() } catch (Pt) { Ot = void 0 } Et("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: c().sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: !1, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", Ot] }) }); function K(xe) { if (!(this instanceof K)) return new K(xe); this.hash = xe.hash, this.predResist = !!xe.predResist, this.outLen = this.hash.outSize, this.minEntropy = xe.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null; var ne = A.toArray(xe.entropy, xe.entropyEnc || "hex"), le = A.toArray(xe.nonce, xe.nonceEnc || "hex"), Ne = A.toArray(xe.pers, xe.persEnc || "hex"); w(ne.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(ne, le, Ne) } var Ee = K; K.prototype._init = function (ne, le, Ne) { var tt = ne.concat(le).concat(Ne); this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8); for (var Et = 0; Et < this.V.length; Et++)this.K[Et] = 0, this.V[Et] = 1; this._update(tt), this._reseed = 1, this.reseedInterval = 281474976710656 }, K.prototype._hmac = function () { return new (c()).hmac(this.hash, this.K) }, K.prototype._update = function (ne) { var le = this._hmac().update(this.V).update([0]); ne && (le = le.update(ne)), this.K = le.digest(), this.V = this._hmac().update(this.V).digest(), ne && (this.K = this._hmac().update(this.V).update([1]).update(ne).digest(), this.V = this._hmac().update(this.V).digest()) }, K.prototype.reseed = function (ne, le, Ne, tt) { typeof le != "string" && (tt = Ne, Ne = le, le = null), ne = A.toArray(ne, le), Ne = A.toArray(Ne, tt), w(ne.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(ne.concat(Ne || [])), this._reseed = 1 }, K.prototype.generate = function (ne, le, Ne, tt) { if (this._reseed > this.reseedInterval) throw new Error("Reseed is required"); typeof le != "string" && (tt = Ne, Ne = le, le = null), Ne && (Ne = A.toArray(Ne, tt || "hex"), this._update(Ne)); for (var Et = []; Et.length < ne;)this.V = this._hmac().update(this.V).digest(), Et = Et.concat(this.V); var Ot = Et.slice(0, ne); return this._update(Ne), this._reseed++, A.encode(Ot, le) }; var we = _.assert; function U(xe, ne) { this.ec = xe, this.priv = null, this.pub = null, ne.priv && this._importPrivate(ne.priv, ne.privEnc), ne.pub && this._importPublic(ne.pub, ne.pubEnc) } var Q = U; U.fromPublic = function (ne, le, Ne) { return le instanceof U ? le : new U(ne, { pub: le, pubEnc: Ne }) }, U.fromPrivate = function (ne, le, Ne) { return le instanceof U ? le : new U(ne, { priv: le, privEnc: Ne }) }, U.prototype.validate = function () { var ne = this.getPublic(); return ne.isInfinity() ? { result: !1, reason: "Invalid public key" } : ne.validate() ? ne.mul(this.ec.curve.n).isInfinity() ? { result: !0, reason: null } : { result: !1, reason: "Public key * N != O" } : { result: !1, reason: "Public key is not a point" } }, U.prototype.getPublic = function (ne, le) { return typeof ne == "string" && (le = ne, ne = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), le ? this.pub.encode(le, ne) : this.pub }, U.prototype.getPrivate = function (ne) { return ne === "hex" ? this.priv.toString(16, 2) : this.priv }, U.prototype._importPrivate = function (ne, le) { this.priv = new (s())(ne, le || 16), this.priv = this.priv.umod(this.ec.curve.n) }, U.prototype._importPublic = function (ne, le) { if (ne.x || ne.y) { this.ec.curve.type === "mont" ? we(ne.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && we(ne.x && ne.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(ne.x, ne.y); return } this.pub = this.ec.curve.decodePoint(ne, le) }, U.prototype.derive = function (ne) { return ne.validate() || we(ne.validate(), "public point not validated"), ne.mul(this.priv).getX() }, U.prototype.sign = function (ne, le, Ne) { return this.ec.sign(ne, this, le, Ne) }, U.prototype.verify = function (ne, le) { return this.ec.verify(ne, le, this) }, U.prototype.inspect = function () { return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >" }; var ee = _.assert; function ue(xe, ne) { if (xe instanceof ue) return xe; this._importDER(xe, ne) || (ee(xe.r && xe.s, "Signature without r or s"), this.r = new (s())(xe.r, 16), this.s = new (s())(xe.s, 16), xe.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = xe.recoveryParam) } var H = ue; function ae() { this.place = 0 } function ce(xe, ne) { var le = xe[ne.place++]; if (!(le & 128)) return le; var Ne = le & 15; if (Ne === 0 || Ne > 4) return !1; for (var tt = 0, Et = 0, Ot = ne.place; Et < Ne; Et++, Ot++)tt <<= 8, tt |= xe[Ot], tt >>>= 0; return tt <= 127 ? !1 : (ne.place = Ot, tt) } function ie(xe) { for (var ne = 0, le = xe.length - 1; !xe[ne] && !(xe[ne + 1] & 128) && ne < le;)ne++; return ne === 0 ? xe : xe.slice(ne) } ue.prototype._importDER = function (ne, le) { ne = _.toArray(ne, le); var Ne = new ae; if (ne[Ne.place++] !== 48) return !1; var tt = ce(ne, Ne); if (tt === !1 || tt + Ne.place !== ne.length || ne[Ne.place++] !== 2) return !1; var Et = ce(ne, Ne); if (Et === !1) return !1; var Ot = ne.slice(Ne.place, Et + Ne.place); if (Ne.place += Et, ne[Ne.place++] !== 2) return !1; var Pt = ce(ne, Ne); if (Pt === !1 || ne.length !== Pt + Ne.place) return !1; var Rt = ne.slice(Ne.place, Pt + Ne.place); if (Ot[0] === 0) if (Ot[1] & 128) Ot = Ot.slice(1); else return !1; if (Rt[0] === 0) if (Rt[1] & 128) Rt = Rt.slice(1); else return !1; return this.r = new (s())(Ot), this.s = new (s())(Rt), this.recoveryParam = null, !0 }; function Pe(xe, ne) { if (ne < 128) { xe.push(ne); return } var le = 1 + (Math.log(ne) / Math.LN2 >>> 3); for (xe.push(le | 128); --le;)xe.push(ne >>> (le << 3) & 255); xe.push(ne) } ue.prototype.toDER = function (ne) { var le = this.r.toArray(), Ne = this.s.toArray(); for (le[0] & 128 && (le = [0].concat(le)), Ne[0] & 128 && (Ne = [0].concat(Ne)), le = ie(le), Ne = ie(Ne); !Ne[0] && !(Ne[1] & 128);)Ne = Ne.slice(1); var tt = [2]; Pe(tt, le.length), tt = tt.concat(le), tt.push(2), Pe(tt, Ne.length); var Et = tt.concat(Ne), Ot = [48]; return Pe(Ot, Et.length), Ot = Ot.concat(Et), _.encode(Ot, ne) }; var Ce = function () { throw new Error("unsupported") }, fe = _.assert; function Te(xe) { if (!(this instanceof Te)) return new Te(xe); typeof xe == "string" && (fe(Object.prototype.hasOwnProperty.call(L, xe), "Unknown curve " + xe), xe = L[xe]), xe instanceof L.PresetCurve && (xe = { curve: xe }), this.curve = xe.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = xe.curve.g, this.g.precompute(xe.curve.n.bitLength() + 1), this.hash = xe.hash || xe.curve.hash } var _e = Te; Te.prototype.keyPair = function (ne) { return new Q(this, ne) }, Te.prototype.keyFromPrivate = function (ne, le) { return Q.fromPrivate(this, ne, le) }, Te.prototype.keyFromPublic = function (ne, le) { return Q.fromPublic(this, ne, le) }, Te.prototype.genKeyPair = function (ne) { ne || (ne = {}); for (var le = new Ee({ hash: this.hash, pers: ne.pers, persEnc: ne.persEnc || "utf8", entropy: ne.entropy || Ce(this.hash.hmacStrength), entropyEnc: ne.entropy && ne.entropyEnc || "utf8", nonce: this.n.toArray() }), Ne = this.n.byteLength(), tt = this.n.sub(new (s())(2)); ;) { var Et = new (s())(le.generate(Ne)); if (!(Et.cmp(tt) > 0)) return Et.iaddn(1), this.keyFromPrivate(Et) } }, Te.prototype._truncateToN = function (ne, le) { var Ne = ne.byteLength() * 8 - this.n.bitLength(); return Ne > 0 && (ne = ne.ushrn(Ne)), !le && ne.cmp(this.n) >= 0 ? ne.sub(this.n) : ne }, Te.prototype.sign = function (ne, le, Ne, tt) { typeof Ne == "object" && (tt = Ne, Ne = null), tt || (tt = {}), le = this.keyFromPrivate(le, Ne), ne = this._truncateToN(new (s())(ne, 16)); for (var Et = this.n.byteLength(), Ot = le.getPrivate().toArray("be", Et), Pt = ne.toArray("be", Et), Rt = new Ee({ hash: this.hash, entropy: Ot, nonce: Pt, pers: tt.pers, persEnc: tt.persEnc || "utf8" }), Jt = this.n.sub(new (s())(1)), Vt = 0; ; Vt++) { var Bt = tt.k ? tt.k(Vt) : new (s())(Rt.generate(this.n.byteLength())); if (Bt = this._truncateToN(Bt, !0), !(Bt.cmpn(1) <= 0 || Bt.cmp(Jt) >= 0)) { var rr = this.g.mul(Bt); if (!rr.isInfinity()) { var br = rr.getX(), lr = br.umod(this.n); if (lr.cmpn(0) !== 0) { var Lt = Bt.invm(this.n).mul(lr.mul(le.getPrivate()).iadd(ne)); if (Lt = Lt.umod(this.n), Lt.cmpn(0) !== 0) { var hr = (rr.getY().isOdd() ? 1 : 0) | (br.cmp(lr) !== 0 ? 2 : 0); return tt.canonical && Lt.cmp(this.nh) > 0 && (Lt = this.n.sub(Lt), hr ^= 1), new H({ r: lr, s: Lt, recoveryParam: hr }) } } } } } }, Te.prototype.verify = function (ne, le, Ne, tt) { ne = this._truncateToN(new (s())(ne, 16)), Ne = this.keyFromPublic(Ne, tt), le = new H(le, "hex"); var Et = le.r, Ot = le.s; if (Et.cmpn(1) < 0 || Et.cmp(this.n) >= 0 || Ot.cmpn(1) < 0 || Ot.cmp(this.n) >= 0) return !1; var Pt = Ot.invm(this.n), Rt = Pt.mul(ne).umod(this.n), Jt = Pt.mul(Et).umod(this.n), Vt; return this.curve._maxwellTrick ? (Vt = this.g.jmulAdd(Rt, Ne.getPublic(), Jt), Vt.isInfinity() ? !1 : Vt.eqXToP(Et)) : (Vt = this.g.mulAdd(Rt, Ne.getPublic(), Jt), Vt.isInfinity() ? !1 : Vt.getX().umod(this.n).cmp(Et) === 0) }, Te.prototype.recoverPubKey = function (xe, ne, le, Ne) { fe((3 & le) === le, "The recovery param is more than two bits"), ne = new H(ne, Ne); var tt = this.n, Et = new (s())(xe), Ot = ne.r, Pt = ne.s, Rt = le & 1, Jt = le >> 1; if (Ot.cmp(this.curve.p.umod(this.curve.n)) >= 0 && Jt) throw new Error("Unable to find sencond key candinate"); Jt ? Ot = this.curve.pointFromX(Ot.add(this.curve.n), Rt) : Ot = this.curve.pointFromX(Ot, Rt); var Vt = ne.r.invm(tt), Bt = tt.sub(Et).mul(Vt).umod(tt), rr = Pt.mul(Vt).umod(tt); return this.g.mulAdd(Bt, Ot, rr) }, Te.prototype.getKeyRecoveryParam = function (xe, ne, le, Ne) { if (ne = new H(ne, Ne), ne.recoveryParam !== null) return ne.recoveryParam; for (var tt = 0; tt < 4; tt++) { var Et; try { Et = this.recoverPubKey(xe, ne, tt) } catch (Ot) { continue } if (Et.eq(le)) return tt } throw new Error("Unable to find valid recovery factor") }; var yt = h(function (xe, ne) { "use strict"; var le = ne; le.version = "6.5.4", le.utils = _, le.rand = function () { throw new Error("unsupported") }, le.curve = $, le.curves = L, le.ec = _e, le.eddsa = null }), st = yt.ec, nt = e(80711); const jt = "signing-key/5.5.0", Zt = new nt.Yd(jt); let Yt = null; function pr() { return Yt || (Yt = new st("secp256k1")), Yt } class lt { constructor(ne) { (0, r.zG)(this, "curve", "secp256k1"), (0, r.zG)(this, "privateKey", (0, d.Dv)(ne)); const le = pr().keyFromPrivate((0, d.lE)(this.privateKey)); (0, r.zG)(this, "publicKey", "0x" + le.getPublic(!1, "hex")), (0, r.zG)(this, "compressedPublicKey", "0x" + le.getPublic(!0, "hex")), (0, r.zG)(this, "_isSigningKey", !0) } _addPoint(ne) { const le = pr().keyFromPublic((0, d.lE)(this.publicKey)), Ne = pr().keyFromPublic((0, d.lE)(ne)); return "0x" + le.pub.add(Ne.pub).encodeCompressed("hex") } signDigest(ne) { const le = pr().keyFromPrivate((0, d.lE)(this.privateKey)), Ne = (0, d.lE)(ne); Ne.length !== 32 && Zt.throwArgumentError("bad digest length", "digest", ne); const tt = le.sign(Ne, { canonical: !0 }); return (0, d.N)({ recoveryParam: tt.recoveryParam, r: (0, d.$m)("0x" + tt.r.toString(16), 32), s: (0, d.$m)("0x" + tt.s.toString(16), 32) }) } computeSharedSecret(ne) { const le = pr().keyFromPrivate((0, d.lE)(this.privateKey)), Ne = pr().keyFromPublic((0, d.lE)(pt(ne))); return (0, d.$m)("0x" + le.derive(Ne.getPublic()).toString(16), 32) } static isSigningKey(ne) { return !!(ne && ne._isSigningKey) } } function We(xe, ne) { const le = (0, d.N)(ne), Ne = { r: (0, d.lE)(le.r), s: (0, d.lE)(le.s) }; return "0x" + pr().recoverPubKey((0, d.lE)(xe), Ne, le.recoveryParam).encode("hex", !1) } function pt(xe, ne) { const le = (0, d.lE)(xe); if (le.length === 32) { const Ne = new lt(le); return ne ? "0x" + pr().keyFromPrivate(le).getPublic(!0, "hex") : Ne.publicKey } else { if (le.length === 33) return ne ? (0, d.Dv)(le) : "0x" + pr().keyFromPublic(le).getPublic(!1, "hex"); if (le.length === 65) return ne ? "0x" + pr().keyFromPublic(le).getPublic(!0, "hex") : (0, d.Dv)(le) } return Zt.throwArgumentError("invalid public or private key", "key", "[REDACTED]") } const mt = "transactions/5.5.0"; var te = e(25108); const G = new nt.Yd(mt); var Z; (function (xe) { xe[xe.legacy = 0] = "legacy", xe[xe.eip2930 = 1] = "eip2930", xe[xe.eip1559 = 2] = "eip1559" })(Z || (Z = {})); function me(xe) { return xe === "0x" ? null : (0, n.Kn)(xe) } function Se(xe) { return xe === "0x" ? p._Y : v.O$.from(xe) } const Ie = [{ name: "nonce", maxLength: 32, numeric: !0 }, { name: "gasPrice", maxLength: 32, numeric: !0 }, { name: "gasLimit", maxLength: 32, numeric: !0 }, { name: "to", length: 20 }, { name: "value", maxLength: 32, numeric: !0 }, { name: "data" }], Ue = { chainId: !0, data: !0, gasLimit: !0, gasPrice: !0, nonce: !0, to: !0, type: !0, value: !0 }; function je(xe) { const ne = pt(xe); return (0, n.Kn)((0, d.p3)((0, i.w)((0, d.p3)(ne, 1)), 12)) } function ke(xe, ne) { return je(We((0, d.lE)(xe), ne)) } function Qe(xe, ne) { const le = (0, d.G1)(v.O$.from(xe).toHexString()); return le.length > 32 && G.throwArgumentError("invalid length for " + ne, "transaction:" + ne, xe), le } function xt(xe, ne) { return { address: (0, n.Kn)(xe), storageKeys: (ne || []).map((le, Ne) => ((0, d.E1)(le) !== 32 && G.throwArgumentError("invalid access list storageKey", `accessList[${xe}:${Ne}]`, le), le.toLowerCase())) } } function Oe(xe) { if (Array.isArray(xe)) return xe.map((le, Ne) => Array.isArray(le) ? (le.length > 2 && G.throwArgumentError("access list expected to be [ address, storageKeys[] ]", `value[${Ne}]`, le), xt(le[0], le[1])) : xt(le.address, le.storageKeys)); const ne = Object.keys(xe).map(le => { const Ne = xe[le].reduce((tt, Et) => (tt[Et] = !0, tt), {}); return xt(le, Object.keys(Ne).sort()) }); return ne.sort((le, Ne) => le.address.localeCompare(Ne.address)), ne } function Le(xe) { return Oe(xe).map(ne => [ne.address, ne.storageKeys]) } function et(xe, ne) { if (xe.gasPrice != null) { const Ne = v.O$.from(xe.gasPrice), tt = v.O$.from(xe.maxFeePerGas || 0); Ne.eq(tt) || G.throwArgumentError("mismatch EIP-1559 gasPrice != maxFeePerGas", "tx", { gasPrice: Ne, maxFeePerGas: tt }) } const le = [Qe(xe.chainId || 0, "chainId"), Qe(xe.nonce || 0, "nonce"), Qe(xe.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"), Qe(xe.maxFeePerGas || 0, "maxFeePerGas"), Qe(xe.gasLimit || 0, "gasLimit"), xe.to != null ? (0, n.Kn)(xe.to) : "0x", Qe(xe.value || 0, "value"), xe.data || "0x", Le(xe.accessList || [])]; if (ne) { const Ne = (0, d.N)(ne); le.push(Qe(Ne.recoveryParam, "recoveryParam")), le.push((0, d.G1)(Ne.r)), le.push((0, d.G1)(Ne.s)) } return (0, d.xs)(["0x02", t.c(le)]) } function He(xe, ne) { const le = [Qe(xe.chainId || 0, "chainId"), Qe(xe.nonce || 0, "nonce"), Qe(xe.gasPrice || 0, "gasPrice"), Qe(xe.gasLimit || 0, "gasLimit"), xe.to != null ? (0, n.Kn)(xe.to) : "0x", Qe(xe.value || 0, "value"), xe.data || "0x", Le(xe.accessList || [])]; if (ne) { const Ne = (0, d.N)(ne); le.push(Qe(Ne.recoveryParam, "recoveryParam")), le.push((0, d.G1)(Ne.r)), le.push((0, d.G1)(Ne.s)) } return (0, d.xs)(["0x01", t.c(le)]) } function dt(xe, ne) { (0, r.uj)(xe, Ue); const le = []; Ie.forEach(function (Ot) { let Pt = xe[Ot.name] || []; const Rt = {}; Ot.numeric && (Rt.hexPad = "left"), Pt = (0, d.lE)((0, d.Dv)(Pt, Rt)), Ot.length && Pt.length !== Ot.length && Pt.length > 0 && G.throwArgumentError("invalid length for " + Ot.name, "transaction:" + Ot.name, Pt), Ot.maxLength && (Pt = (0, d.G1)(Pt), Pt.length > Ot.maxLength && G.throwArgumentError("invalid length for " + Ot.name, "transaction:" + Ot.name, Pt)), le.push((0, d.Dv)(Pt)) }); let Ne = 0; if (xe.chainId != null ? (Ne = xe.chainId, typeof Ne != "number" && G.throwArgumentError("invalid transaction.chainId", "transaction", xe)) : ne && !(0, d.Zq)(ne) && ne.v > 28 && (Ne = Math.floor((ne.v - 35) / 2)), Ne !== 0 && (le.push((0, d.Dv)(Ne)), le.push("0x"), le.push("0x")), !ne) return t.c(le); const tt = (0, d.N)(ne); let Et = 27 + tt.recoveryParam; return Ne !== 0 ? (le.pop(), le.pop(), le.pop(), Et += Ne * 2 + 8, tt.v > 28 && tt.v !== Et && G.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", ne)) : tt.v !== Et && G.throwArgumentError("transaction.chainId/signature.v mismatch", "signature", ne), le.push((0, d.Dv)(Et)), le.push((0, d.G1)((0, d.lE)(tt.r))), le.push((0, d.G1)((0, d.lE)(tt.s))), t.c(le) } function It(xe, ne) { if (xe.type == null || xe.type === 0) return xe.accessList != null && G.throwArgumentError("untyped transactions do not support accessList; include type: 1", "transaction", xe), dt(xe, ne); switch (xe.type) { case 1: return He(xe, ne); case 2: return et(xe, ne); default: break }return G.throwError(`unsupported transaction type: ${xe.type}`, nt.Yd.errors.UNSUPPORTED_OPERATION, { operation: "serializeTransaction", transactionType: xe.type }) } function Dt(xe, ne, le) { try { const Ne = Se(ne[0]).toNumber(); if (Ne !== 0 && Ne !== 1) throw new Error("bad recid"); xe.v = Ne } catch (Ne) { G.throwArgumentError("invalid v for transaction type: 1", "v", ne[0]) } xe.r = (0, d.$m)(ne[1], 32), xe.s = (0, d.$m)(ne[2], 32); try { const Ne = (0, i.w)(le(xe)); xe.from = ke(Ne, { r: xe.r, s: xe.s, recoveryParam: xe.v }) } catch (Ne) { te.log(Ne) } } function _t(xe) { const ne = t.J(xe.slice(1)); ne.length !== 9 && ne.length !== 12 && G.throwArgumentError("invalid component count for transaction type: 2", "payload", (0, d.Dv)(xe)); const le = Se(ne[2]), Ne = Se(ne[3]), tt = { type: 2, chainId: Se(ne[0]).toNumber(), nonce: Se(ne[1]).toNumber(), maxPriorityFeePerGas: le, maxFeePerGas: Ne, gasPrice: null, gasLimit: Se(ne[4]), to: me(ne[5]), value: Se(ne[6]), data: ne[7], accessList: Oe(ne[8]) }; return ne.length === 9 || (tt.hash = (0, i.w)(xe), Dt(tt, ne.slice(9), et)), tt } function nr(xe) { const ne = t.J(xe.slice(1)); ne.length !== 8 && ne.length !== 11 && G.throwArgumentError("invalid component count for transaction type: 1", "payload", (0, d.Dv)(xe)); const le = { type: 1, chainId: Se(ne[0]).toNumber(), nonce: Se(ne[1]).toNumber(), gasPrice: Se(ne[2]), gasLimit: Se(ne[3]), to: me(ne[4]), value: Se(ne[5]), data: ne[6], accessList: Oe(ne[7]) }; return ne.length === 8 || (le.hash = (0, i.w)(xe), Dt(le, ne.slice(8), He)), le } function Ar(xe) { const ne = t.J(xe); ne.length !== 9 && ne.length !== 6 && G.throwArgumentError("invalid raw transaction", "rawTransaction", xe); const le = { nonce: Se(ne[0]).toNumber(), gasPrice: Se(ne[1]), gasLimit: Se(ne[2]), to: me(ne[3]), value: Se(ne[4]), data: ne[5], chainId: 0 }; if (ne.length === 6) return le; try { le.v = v.O$.from(ne[6]).toNumber() } catch (Ne) { return te.log(Ne), le } if (le.r = (0, d.$m)(ne[7], 32), le.s = (0, d.$m)(ne[8], 32), v.O$.from(le.r).isZero() && v.O$.from(le.s).isZero()) le.chainId = le.v, le.v = 0; else { le.chainId = Math.floor((le.v - 35) / 2), le.chainId < 0 && (le.chainId = 0); let Ne = le.v - 27; const tt = ne.slice(0, 6); le.chainId !== 0 && (tt.push((0, d.Dv)(le.chainId)), tt.push("0x"), tt.push("0x"), Ne -= le.chainId * 2 + 8); const Et = (0, i.w)(t.c(tt)); try { le.from = ke(Et, { r: (0, d.Dv)(le.r), s: (0, d.Dv)(le.s), recoveryParam: Ne }) } catch (Ot) { te.log(Ot) } le.hash = (0, i.w)(xe) } return le.type = null, le } function it(xe) { const ne = (0, d.lE)(xe); if (ne[0] > 127) return Ar(ne); switch (ne[0]) { case 1: return nr(ne); case 2: return _t(ne); default: break }return G.throwError(`unsupported transaction type: ${ne[0]}`, nt.Yd.errors.UNSUPPORTED_OPERATION, { operation: "parseTransaction", transactionType: ne[0] }) } }, 41740: function (I, l, e) {
        "use strict"; var n = this && this.__makeTemplateObject || function (Y, V) { return Object.defineProperty ? Object.defineProperty(Y, "raw", { value: V }) : Y.raw = V, Y }, v, d, p, i, r; Object.defineProperty(l, "__esModule", { value: !0 }), l.ButtonSize = l.ButtonType = void 0; var t = e(67294), a = e(24910), s = e(22458), o = e(99688), c = e(10733), f = e(98888), u = e(34458), h = e(64833), m; (function (Y) { Y.PRIMARY = "primary", Y.SECONDARY = "secondary", Y.TEXT = "text" })(m = l.ButtonType || (l.ButtonType = {})); var b; (function (Y) { Y.LARGE = "large", Y.REGULAR = "regular", Y.SMALL = "small" })(b = l.ButtonSize || (l.ButtonSize = {})); var y = function (Y) { return t.createElement(j, { style: Y.style, useCompact: Y.useCompact, onClick: Y.onClick, className: Y.className, buttonType: Y.type, buttonSize: (Y == null ? void 0 : Y.size) || b.REGULAR, width: Y.width, fullWidth: Y.fullWidth, color: Y.color, hoverBackgroundColor: Y.hoverBackgroundColor, inactive: Y.inactive }, t.createElement(o.SpanFlex, { justify: o.FlexJustify.CENTER, align: o.FlexAlign.CENTER }, Y.icon && t.createElement(t.Fragment, null, Y.icon, t.createElement(f.SpanSpacing, { left: 1 })), Y.children)) }, E = (v = {}, v[b.LARGE] = 64, v[b.REGULAR] = 48, v[b.SMALL] = 32, v), w = (d = {}, d[b.LARGE] = 16, d[b.REGULAR] = 16, d[b.SMALL] = 14, d), x = (p = {}, p[m.PRIMARY] = c.themeColors.blue[60], p[m.SECONDARY] = "transparent", p[m.TEXT] = "transparent", p), A = (i = {}, i[m.PRIMARY] = "#fff", i[m.SECONDARY] = c.themeColors.blue[60], i[m.TEXT] = c.themeColors.blue[60], i), _ = (r = {}, r[m.PRIMARY] = "transparent", r[m.SECONDARY] = "1px solid " + c.themeColors.blue[60], r[m.TEXT] = "transparent", r), k = function (Y, V) { if (u.isArray(Y)) switch (V) { case s.BreakpointType.LARGE_DESKTOP: return Y[0]; case s.BreakpointType.DESKTOP: return Y[1]; case s.BreakpointType.TABLET: return Y.length == 4 ? Y[2] : Y[0]; case s.BreakpointType.MOBILE: return Y.length == 4 ? Y[3] : Y[0] }return Y }, j = a.default.button.withConfig({ shouldForwardProp: h.passOnlyChildren })(D || (D = n([`
