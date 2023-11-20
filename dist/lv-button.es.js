import { openBlock as r, createElementBlock as s, renderSlot as a } from "vue";
const u = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, c] of e)
    n[o] = c;
  return n;
}, _ = {}, l = { class: "lv-button" };
function d(t, e) {
  return r(), s("button", l, [
    a(t.$slots, "default", {}, void 0, !0)
  ]);
}
const f = /* @__PURE__ */ u(_, [["render", d], ["__scopeId", "data-v-6a1e6b39"]]), p = {
  install: (t, e) => {
    t.component("LearnVueButton", f);
  }
};
export {
  p as default
};
