import{a as we,b as Ie}from"./chunk-7KGL7TWE.js";import{B as ve,C as X,D as Y,E as k,Ea as Ee,F as A,G as F,J as g,K as s,N as E,P as h,Q as G,R as C,S as K,T as u,U as d,V as J,W as Ce,X as f,Y as w,Z as m,_ as ee,a as p,b as _,ba as te,ca as ne,da as ie,ea as V,fa as Ve,g as fe,i as pe,j as ge,k as me,l as _e,la as De,ma as be,na as Me,o as P,oa as re,p as y,r as Q,ra as Ae,s as v,sa as Fe,v as M,w as ye,x as Z,y as l}from"./chunk-TKCC2KLW.js";var je=(()=>{class n{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(i){return new(i||n)(s(E),s(A))}}static{this.\u0275dir=l({type:n})}}return n})(),se=(()=>{class n extends je{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})()}static{this.\u0275dir=l({type:n,features:[h]})}}return n})(),L=new v("");var st={provide:L,useExisting:y(()=>W),multi:!0};function at(){let n=re()?re().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var lt=new v(""),W=(()=>{class n extends je{constructor(e,i,r){super(e,i),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!at())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(i){return new(i||n)(s(E),s(A),s(lt,8))}}static{this.\u0275dir=l({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&f("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[V([st]),h]})}}return n})();var Be=new v(""),Re=new v("");function Ue(n){return n!=null}function He(n){return De(n)?pe(n):n}function Le(n){let t={};return n.forEach(e=>{t=e!=null?p(p({},t),e):t}),Object.keys(t).length===0?null:t}function We(n,t){return t.map(e=>e(n))}function ut(n){return!n.validate}function $e(n){return n.map(t=>ut(t)?t:e=>t.validate(e))}function dt(n){if(!n)return null;let t=n.filter(Ue);return t.length==0?null:function(e){return Le(We(e,t))}}function ae(n){return n!=null?dt($e(n)):null}function ct(n){if(!n)return null;let t=n.filter(Ue);return t.length==0?null:function(e){let i=We(e,t).map(He);return _e(i).pipe(me(Le))}}function le(n){return n!=null?ct($e(n)):null}function Se(n,t){return n===null?[t]:Array.isArray(n)?[...n,t]:[n,t]}function ht(n){return n._rawValidators}function ft(n){return n._rawAsyncValidators}function oe(n){return n?Array.isArray(n)?n:[n]:[]}function j(n,t){return Array.isArray(n)?n.includes(t):n===t}function Ne(n,t){let e=oe(t);return oe(n).forEach(r=>{j(e,r)||e.push(r)}),e}function Oe(n,t){return oe(t).filter(e=>!j(n,e))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=ae(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},b=class extends B{get formDirective(){return null}get path(){return null}},O=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},pt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},un=_(p({},pt),{"[class.ng-submitted]":"isSubmitted"}),qe=(()=>{class n extends R{constructor(e){super(e)}static{this.\u0275fac=function(i){return new(i||n)(s(O,2))}}static{this.\u0275dir=l({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[h]})}}return n})(),ze=(()=>{class n extends R{constructor(e){super(e)}static{this.\u0275fac=function(i){return new(i||n)(s(b,10))}}static{this.\u0275dir=l({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[h]})}}return n})();var I="VALID",T="INVALID",D="PENDING",S="DISABLED";function Qe(n){return($(n)?n.validators:n)||null}function gt(n){return Array.isArray(n)?ae(n):n||null}function Ze(n,t){return($(t)?t.asyncValidators:n)||null}function mt(n){return Array.isArray(n)?le(n):n||null}function $(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function _t(n,t,e){let i=n.controls;if(!(t?Object.keys(i):i).length)throw new P(1e3,"");if(!i[e])throw new P(1001,"")}function yt(n,t,e){n._forEachChild((i,r)=>{if(e[r]===void 0)throw new P(1002,"")})}var U=class{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===T}get pending(){return this.status==D}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Ne(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Ne(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Oe(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Oe(t,this._rawAsyncValidators))}hasValidator(t){return j(this._rawValidators,t)}hasAsyncValidator(t){return j(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=D,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=S,this.errors=null,this._forEachChild(i=>{i.disable(_(p({},t),{onlySelf:!0}))}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(_(p({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=I,this._forEachChild(i=>{i.enable(_(p({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(_(p({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator=!0;let e=He(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(t,e){let i=e?this.get(e):this;return i&&i.errors?i.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(T)?T:I}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){$(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=gt(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=mt(this._rawAsyncValidators)}},H=class extends U{constructor(t,e,i){super(Qe(e),Ze(i,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,i={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,i={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){yt(this,!0,t),Object.keys(t).forEach(i=>{_t(this,!0,i),this.controls[i].setValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(i=>{let r=this.controls[i];r&&r.patchValue(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((i,r)=>{i.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,i)=>(t[i]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&t(i,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&t(i))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(t,e){let i=t;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ue=new v("CallSetDisabledState",{providedIn:"root",factory:()=>de}),de="always";function vt(n,t){return[...t.path,n]}function Xe(n,t,e=de){Ye(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(n.disabled),Vt(n,t),bt(n,t),Dt(n,t),Ct(n,t)}function xe(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Ct(n,t){if(t.valueAccessor.setDisabledState){let e=i=>{t.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Ye(n,t){let e=ht(n);t.validator!==null?n.setValidators(Se(e,t.validator)):typeof e=="function"&&n.setValidators([e]);let i=ft(n);t.asyncValidator!==null?n.setAsyncValidators(Se(i,t.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();xe(t._rawValidators,r),xe(t._rawAsyncValidators,r)}function Vt(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Ke(n,t)})}function Dt(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Ke(n,t),n.updateOn!=="submit"&&n.markAsTouched()})}function Ke(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function bt(n,t){let e=(i,r)=>{t.valueAccessor.writeValue(i),r&&t.viewToModelUpdate(i)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Mt(n,t){n==null,Ye(n,t)}function At(n,t){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Ft(n){return Object.getPrototypeOf(n.constructor)===se}function Et(n,t){n._syncPendingControls(),t.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function wt(n,t){if(!t)return null;Array.isArray(t);let e,i,r;return t.forEach(o=>{o.constructor===W?e=o:Ft(o)?i=o:r=o}),r||i||e||null}var It={provide:b,useExisting:y(()=>ce)},N=Promise.resolve(),ce=(()=>{class n extends b{constructor(e,i,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._directives=new Set,this.ngSubmit=new F,this.form=new H({},ae(e),le(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){N.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Xe(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){N.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){N.then(()=>{let i=this._findContainer(e.path),r=new H({});Mt(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){N.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){N.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,Et(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static{this.\u0275fac=function(i){return new(i||n)(s(Be,10),s(Re,10),s(ue,8))}}static{this.\u0275dir=l({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&f("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[M.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[V([It]),h]})}}return n})();function Pe(n,t){let e=n.indexOf(t);e>-1&&n.splice(e,1)}function ke(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var St=class extends U{constructor(t=null,e,i){super(Qe(e),Ze(i,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),$(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ke(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Pe(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Pe(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){ke(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Nt={provide:O,useExisting:y(()=>he)},Ge=Promise.resolve(),he=(()=>{class n extends O{constructor(e,i,r,o,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this.control=new St,this._registered=!1,this.name="",this.update=new F,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=wt(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),At(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Xe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ge.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&Me(i);Ge.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?vt(e,this._parent):[e]}static{this.\u0275fac=function(i){return new(i||n)(s(b,9),s(Be,10),s(Re,10),s(L,10),s(be,8),s(ue,8))}}static{this.\u0275dir=l({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"],options:[M.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[V([Nt]),h,ve]})}}return n})(),Je=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275dir=l({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return n})();var Ot={provide:L,useExisting:y(()=>q),multi:!0};function et(n,t){return n==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function xt(n){return n.split(":")[0]}var q=(()=>{class n extends se{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let i=this._getOptionId(e),r=et(i,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=i=>{this.value=this._getOptionValue(i),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i),e))return i;return null}_getOptionValue(e){let i=xt(e);return this._optionMap.has(i)?this._optionMap.get(i):e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})()}static{this.\u0275dir=l({type:n,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(i,r){i&1&&f("change",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[V([Ot]),h]})}}return n})(),tt=(()=>{class n{constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(et(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(i){return new(i||n)(s(A),s(E),s(q,9))}}static{this.\u0275dir=l({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return n})(),Pt={provide:L,useExisting:y(()=>nt),multi:!0};function Te(n,t){return n==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${n}: ${t}`.slice(0,50))}function kt(n){return n.split(":")[0]}var nt=(()=>{class n extends se{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let i;if(Array.isArray(e)){let r=e.map(o=>this._getOptionId(o));i=(o,a)=>{o._setSelected(r.indexOf(a.toString())>-1)}}else i=(r,o)=>{r._setSelected(!1)};this._optionMap.forEach(i)}registerOnChange(e){this.onChange=i=>{let r=[],o=i.selectedOptions;if(o!==void 0){let a=o;for(let c=0;c<a.length;c++){let x=a[c],z=this._getOptionValue(x.value);r.push(z)}}else{let a=i.options;for(let c=0;c<a.length;c++){let x=a[c];if(x.selected){let z=this._getOptionValue(x.value);r.push(z)}}}this.value=r,e(r)}}_registerOption(e){let i=(this._idCounter++).toString();return this._optionMap.set(i,e),i}_getOptionId(e){for(let i of this._optionMap.keys())if(this._compareWith(this._optionMap.get(i)._value,e))return i;return null}_getOptionValue(e){let i=kt(e);return this._optionMap.has(i)?this._optionMap.get(i)._value:e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=k(n)))(r||n)}})()}static{this.\u0275dir=l({type:n,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(i,r){i&1&&f("change",function(a){return r.onChange(a.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[V([Pt]),h]})}}return n})(),it=(()=>{class n{constructor(e,i,r){this._element=e,this._renderer=i,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(Te(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(Te(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(i){return new(i||n)(s(A),s(E),s(nt,9))}}static{this.\u0275dir=l({type:n,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return n})();var Gt=(()=>{class n{static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Z({type:n})}static{this.\u0275inj=Q({})}}return n})();var rt=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ue,useValue:e.callSetDisabledState??de}]}}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275mod=Z({type:n})}static{this.\u0275inj=Q({imports:[Gt]})}}return n})();function jt(n,t){n&1&&(u(0,"div",11),J(1,"div",12),d())}function Bt(n,t){if(n&1){let e=Ce();u(0,"input",13),f("ngModelChange",function(){X(e);let r=w();return Y(r.updateQuery())}),ie("ngModelChange",function(r){X(e);let o=w();return ne(o.gameName,r)||(o.gameName=r),Y(r)}),d()}if(n&2){let e=w();te("ngModel",e.gameName)}}function Rt(n,t){if(n&1&&(u(0,"option",14),m(1),d()),n&2){let e=t.$implicit;C("value",e),g(),ee(e)}}function Ut(n,t){if(n&1&&(u(0,"div",15),m(1," Can't find "),u(2,"b"),m(3),d()()),n&2){let e=w();g(3),ee(e.gameName)}}var yn=(()=>{class n{constructor(e,i){this.router=e,this.matchService=i,this.gameName="",this.regions=[],this.regionQuery="EUW1",this.isLoading=!1,this.showError=!1,Object.values(we).forEach(r=>{this.regions.push(r)})}updateQuery(){this.showError=!1}search(){return fe(this,null,function*(){if(this.gameName.length!=0)try{let e=this.gameName.trim().split("#"),i=e[0].toLocaleLowerCase(),r=e[1].toLocaleLowerCase(),o=this.regionQuery;this.isLoading=!0,this.matchService.matchHistory=yield ge(this.matchService.GetLastMatches(i,r,o)),this.router.navigateByUrl(`match-history/${i}/${r}/${o}`),this.isLoading=!1}catch{this.isLoading=!1,this.showError=!0}})}static{this.\u0275fac=function(i){return new(i||n)(s(Ee),s(Ie))}}static{this.\u0275cmp=ye({type:n,selectors:[["app-home"]],standalone:!0,features:[Ve],decls:16,vars:5,consts:[[1,"background"],[1,"container"],[1,"form-search-bar"],[1,"searchbar"],[1,"form-container",3,"ngSubmit"],["class","loader",4,"ngIf"],["type","text","name","searchQuery","placeholder","Search  (Name#TagLine)",3,"ngModel","ngModelChange",4,"ngIf"],["name","Region","id","cars",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"click"],["class","notification error",4,"ngIf"],[1,"loader"],[1,"spinner"],["type","text","name","searchQuery","placeholder","Search  (Name#TagLine)",3,"ngModelChange","ngModel"],[3,"value"],[1,"notification","error"]],template:function(i,r){i&1&&(J(0,"div",0),u(1,"div",1)(2,"h1"),m(3,"Discover your Carry Score"),d(),u(4,"p"),m(5,"Enter your summoner name and see who really made the difference"),d(),u(6,"div",2)(7,"div",3)(8,"form",4),f("ngSubmit",function(){return r.search()}),G(9,jt,2,0,"div",5)(10,Bt,1,1,"input",6),u(11,"select",7),ie("ngModelChange",function(a){return ne(r.regionQuery,a)||(r.regionQuery=a),a}),G(12,Rt,2,2,"option",8),d()(),u(13,"button",9),f("click",function(){return r.search()}),m(14," Search "),d()(),G(15,Ut,4,1,"div",10),d()()),i&2&&(g(9),C("ngIf",r.isLoading),g(),C("ngIf",!r.isLoading),g(),te("ngModel",r.regionQuery),g(),C("ngForOf",r.regions),g(3),C("ngIf",r.showError))},dependencies:[rt,Je,tt,it,W,q,qe,ze,he,ce,Ae,Fe],styles:['@charset "UTF-8";h1[_ngcontent-%COMP%]{text-align:center;margin-top:50px}.background[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.5;background:url(/assets/home.png);background-size:cover;background-position:center;background-attachment:fixed;z-index:-1}p[_ngcontent-%COMP%]{text-align:center}.searchbar[_ngcontent-%COMP%]{display:flex;background:#fff}.form-search-bar[_ngcontent-%COMP%]{padding-top:50px;max-width:550px;border-radius:5px;width:100%;margin:auto}input[_ngcontent-%COMP%]{border:none;flex:1;padding:15px;border-radius:5px}input[_ngcontent-%COMP%]:hover{outline:none;border:none}input[_ngcontent-%COMP%]:focus{border:none;outline:none}select[_ngcontent-%COMP%]{border:none;border-radius:5px;margin:5px;background:#0c1117;color:#fff;font-size:12Px;padding:10px}select[_ngcontent-%COMP%]:hover{outline:none;border:none}.form-container[_ngcontent-%COMP%]{display:flex;flex:1}.form-control[_ngcontent-%COMP%]{flex:1}.loader[_ngcontent-%COMP%]{z-index:1000;font-size:20px;color:#0d161b;width:100%;margin:10px}.spinner[_ngcontent-%COMP%]{border:4px solid #f3f3f3;border-top:4px solid #0d161b;border-radius:50%;width:16px;height:16px;animation:_ngcontent-%COMP%_spin 1s linear infinite}button[_ngcontent-%COMP%]{color:#fff;background:transparent;border:none;background:#0091ff;outline:none;padding-left:10px;font-size:12px;padding-right:10px}button[_ngcontent-%COMP%]:hover{cursor:pointer;background:#005eff}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media (max-width: 800px){.searchbar[_ngcontent-%COMP%]{display:block}button[_ngcontent-%COMP%]{width:100%;height:40px}.form-search-bar[_ngcontent-%COMP%]{max-width:100%}}']})}}return n})();export{yn as HomeComponent};
