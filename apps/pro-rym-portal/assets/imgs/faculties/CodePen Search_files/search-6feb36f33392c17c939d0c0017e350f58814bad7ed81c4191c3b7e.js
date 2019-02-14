window.Keytrap=function(){"use strict";function e(e){var t=[e.keyCode||e.which];return e.shiftKey&&16!==e.keyCode&&t.push(16),e.ctrlKey&&17!==e.keyCode&&t.push(17),e.altKey&&18!==e.keyCode&&t.push(18),e.metaKey&&91!==e.keyCode&&t.push(91),t.sort(),t.join("+")}function t(e){return s[e]?s[e]:e.toUpperCase().charCodeAt(0)}function n(e){for(var n=e.split("+"),o=[],i=0;i<n.length;i++)o.push(t(n[i]));return o.sort(),o.join("+")}function o(e){for(var t=[],o=e.split(","),i=0;i<o.length;i++)t.push(n(o[i]));return t}function i(e,t){if(a[t]){for(var n=a[t],o=0;o<n.length;o++)n[o](e);if(c[t]&&e)return jQuery.Event(e).stopPropagation(),!1}}function l(t){return i(t,e(t))}var a={},c={},s={backspace:8,tab:9,enter:13,"return":13,shift:16,ctrl:17,comctrl:17,alt:18,"":18,capslock:20,esc:27,escape:27,space:32,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40,del:46,meta:91,command:91,";":186,"=":187,",":188,"-":189,".":190,"/":191,"`":192,"[":219,"\\":220,"]":221,'"':222};return-1!==navigator.appVersion.indexOf("Mac")&&(s.comctrl=91),$(document).on("keydown",l),{bind:function(e,t,n){for(var i=o(e),l=i.length-1;l>=0;l--)jQuery.isArray(a[i[l]])||(a[i[l]]=[]),a[i[l]].push(t),c[i[l]]=!!n},getKeyCode:function(e){return t(e)},getKeyEventID:function(t){return"string"==typeof t?n(t):e(t)},keyEventMatchesKeyCombo:function(t,o){return e(t)===n(o)},trigger:function(e,t){i(e,t)}}}(),function(){var e=!1,t=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.Class=function(){},Class.extend=function(n){function o(){!e&&this.init&&this.init.apply(this,arguments)}var i=this.prototype;e=!0;var l=new this;for(var a in e=!1,n)l[a]="function"==typeof n[a]&&"function"==typeof i[a]&&t.test(n[a])?function(e,t){return function(){var n=this._super;this._super=i[e];var o=t.apply(this,arguments);return this._super=n,o}}(a,n[a]):n[a];return o.prototype=l,o.prototype.constructor=o,o.extend=arguments.callee,o}}(),jQuery.fn.putCursorAtEnd=function(){return this.each(function(){if($(this).focus(),this.setSelectionRange){var e=2*$(this).val().length;this.setSelectionRange(e,e)}else $(this).val($(this).val());this.scrollTop=999999})};var Love={_saveLoveToDBFunc:null,THROTTLE_DELAY:500,init:function(){_.extend(this,AJAXUtil),this.user=window.__user,this._bindToDOM(),this._createSaveLoveToDBFunc()},_createSaveLoveToDBFunc:function(){this._saveLoveToDBFunc=_.throttle(this._saveLoveChange,this.THROTTLE_DELAY,{leading:!1,trailing:!0})},_bindToDOM:function(){$("body").on("click",'a[id*="loves_"], button[id*="loves_"], span[id*="loves_"]',$.proxy(this._onHeartClick,this))},_onHeartClick:function(e){if(e.preventDefault(),this._userNeedsToLogin())return this._redirectToLogin();var t=$(e.target).closest(".loves");this._heartItem(t)},_userNeedsToLogin:function(){return 1==this.user.id},_redirectToLogin:function(){window.location="/login?type=love"},_heartItem:function(e){var t=this._getNextLevel(e);this._showAsHearted(e,t),this._saveLoveToDBFunc(e.data("item"),e.data("hashid"),t)},_getNextLevel:function(e){if(e.hasClass("comment-heart"))return this._isCommentedLoved(e)?0:1;var t=this._findTextLoveLevel(e.attr("class"));return this._nextLoveLevel(t)},_isCommentedLoved:function(e){return e.hasClass("love")},_findTextLoveLevel:function(e){var t=e.match(/loved-(\d)/);return t?1*t[1]:0},_nextLoveLevel:function(e){return 3===e?0:e+1},_showAsHearted:function(e,t){this._isHeartingComment(e)?this._showCommentHeartAsHearted(e,t):this._showStandardHeartAsHearted(e,t)},_isHeartingComment:function(e){return e.hasClass("comment-heart")},_showCommentHeartAsHearted:function(e,t){t>0?e.addClass("love loved-1"):e.removeClass("love loved-1"),this._updateLoveCount(e,t)},_showStandardHeartAsHearted:function(e,t){var n=e.data("hashid"),o=$("[data-hashid='"+n+"']");$.each(o,function(e,n){var o=$(n);if(!o.hasClass("count")){var i=o.hasClass("single-stat")?o:$(".heart-button");i.removeClass("loved-1 loved-2 loved-3 loved-0").attr("aria-pressed",!1).addClass("loved-"+t),0!=t&&i.attr("aria-pressed",!0),Love._updateLoveCount(i,t)}})},_updateLoveCount:function(e,t){var n=e.find("span.count"),o=this._getValueToAddToCount(t);n.html(this._getLoveCount(n,o))},_getValueToAddToCount:function(e){return 0===e?-1:1===e?1:0},_getLoveCount:function(e,t){var n=e.html();if(n){var o=1*n.replace(/[,. ]/g,""),i=isNaN(o)?0:o;return(i+=t)>0?this._delimit(i):""}return""},_delimit:function(e,t){return t=t||",",e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t)},_saveLoveChange:function(e,t,n){var o="/love/"+[e,t,n].join("/");this.post(o,{},function(){this._doneSaveLoveChange(e)})},_doneSaveLoveChange:function(e){"undefined"!=typeof Hub&&Hub.pub(e+"-hearted")}};Love.init(),$.fn.serializeObject=function(){var e={},t=this.serializeArray();return $.each(t,function(){e[this.name]?(e[this.name].push||(e[this.name]=[e[this.name]]),e[this.name].push(this.value||"")):e[this.name]=this.value||""}),e},function(){function e(){$("body").on("change",".collection-choice",t)}function t(e){var t=o(e);-1===[s,r].indexOf(t)&&c(t,i(e))}function n(e){$.showMessage(a(e),"slow"),$(".collections-mini-modal").remove(),u.val(r)}function o(e){return $(e.target).find("option:selected").val()}function i(e){return"pen"===d?CP.pen.slug_hash:$(e.target).closest(".single-pen").data("slug-hash")}function l(e,t){return"/collections/add/"+e+"/"+t}function a(e){var t=e.collection.slug_hash;return e.collection["private"]&&(t=e.collection.slug_hash_private),_.template(Copy.penAddToCollection,{name:e.collection.name,url:"/collection/"+t})}function c(e,t){AJAXUtil.post(l(e,t),{},n)}CP.collectionAddPen={};var s="__add__",r="__choose__",d=window.__pageType,u=$("#collection-choice");CP.collectionAddPen.init=function(){e()}}(),"undefined"==typeof window.Copy&&(window.Copy={}),_.extend(window.Copy,{penRemovedFromCollection:"Pen removed from Collection.",collectionSavedPenAdded:"Your Collection '<%= name %>' was created and this Pen was added to it. <a href='<%= url %>'>View collection</a>.",collectionCreated:"Your Collection '<%= name %>' was created. <a href='<%= url %>'>View collection</a>.",collectionUpdated:"Your Collection '<%= name %>' has been updated.",penAddToCollection:"This Pen was added to the '<%= name %>' collection. <a href='<%= url %>'>View collection</a>.",collectionDeleted:"Your Collection was deleted!"});var CollectionRemovePen=Class.extend({init:function(){_.extend(this,AJAXUtil),this._bindToDOM()},_bindToDOM:function(){$("body").on("click",".remove-pen-from-collection",$.proxy(this._removePenFromCollection,this))},_removePenFromCollection:function(e){this.post(this._getRemovePenFromCollectionURL($(e.target)),{},$.proxy(this._onDoneRemovePenFromCollection,this))},_getRemovePenFromCollectionURL:function(e){return"/collections/remove/"+window.__item.slug_hash+"/"+e.data("slug-hash")},_onDoneRemovePenFromCollection:function(){Page.renderPages(window.__pages)}}),CollectionsFlyout=Class.extend({init:function(){this._bindToDOM(),this._bindToHub()},_bindToDOM:function(){$("body").on("click",".add-to-collection-from-flyout",$.proxy(this._show,this)).on("click",".close-button-collections-mini-modal",$.proxy(this._close,this))},_bindToHub:function(){Hub.sub("collection-saved",this._close)},_show:function(e){e.preventDefault(),$.get("/ajax/collections/flyout_mini_modal",function(t){$(e.target).closest(".single-pen").append(t.html)})},_close:function(){$(".collections-mini-modal").remove()}});!function(){function e(e,t){AJAXUtil.put("/collections/"+e.slug_hash,e,t)}function t(e,t){AJAXUtil.post("/collections",e,t)}function n(e){return _.extend(e,{slug_hash:CP.collection.selectedPenSlugHash})}function o(){c({"private":u()})}function i(){e(CP.collection.VM,function(){d()})}function l(){return{id:"",name:"",description:"",slug_hash:"",slug_hash_private:"","private":!1}}function a(){for(var e in CP.collection.VM=l(),CP.collection._VM=[],CP.collection.VM)CP.collection._VM.push(e)}function c(e){for(var t in e)-1!==CP.collection._VM.indexOf(t)&&(CP.collection.VM[t]=e[t])}function s(){c(window.__item)}function r(){var e=CP.collection.VM;return e["private"]?e.slug_hash_private:e.slug_hash}function d(){if(window.history.replaceState&&r()){var e=URLBuilder.getViewURLSimple("collection","",r(),!1);window.history.replaceState(e,"",e)}}function u(){return!!$("#collection-details-private").is(":checked")}CP.collection={},CP.collection.init=function(){a(),s()},CP.collection.updateViewModel=function(e){c(e)},CP.collection.getActiveSlugHash=r,CP.collection.onPrivacyChange=o,CP.collection.onEditPrivacyChange=i,CP.collection.loadBlankViewModel=a,CP.collection.loadInitialViewModel=s,CP.collection.selectedPenSlugHash="",CP.collection.save=function(o){CP.collection.VM.slug_hash.length>0?e(CP.collection.VM,o):t(n(CP.collection.VM),o)}}(),function(){function e(e,t){CP.TextFormatter.put("/text_formatter/text",{text:e},t)}CP.TextFormatter={},CP.TextFormatter.init=function(){_.extend(CP.TextFormatter,AJAXUtil),CP.TextFormatter.formatText=e}}(),function(){function e(){S.on("click",".edit-collection",o).on("click","#add-new-collection-button",n).on("click","#create-new-collection",n).on("change",".collection-choice",t).on("submit","#edit-collection-form",c).on("submit","#add-new-collection-form",c).on("click","#add-new-collection-form .ios-toggle",l).on("click","#edit-collection-form .ios-toggle",a),U.on("click",g)}function t(e){m(e)===V&&(k=!0,i(C(e)))}function n(e){e.preventDefault(),i("")}function o(e){A=!0,O=!0,e.preventDefault(),D($(e.target).data("slug-hash"),"")}function i(e){A=!1,O=!1,CP.collection.loadBlankViewModel(),D(0,e)}function l(){CP.collection.onPrivacyChange()}function a(){l(),CP.collection.onEditPrivacyChange(),M()}function c(e){e.preventDefault(),d()}function s(e){e.success?(p(e),v()):AJAXUtil.showStandardErrorMessage(e)}function r(e,t){CP.collection.updateViewModel(t),y(e,t),T(t),Hub.pub("collection-saved")}function d(){P(),CP.collection.save(function(e){r(CP.collection.VM.id,e.collection)})}function u(){Hub.sub("key",h),Hub.sub("popup-open",f)}function h(e,t){"esc"===t.key&&g()}function f(e,t){t!==I&&g()}function p(e){(L=$("<div />",{"class":"modal modal-neutral group ",html:e.html})).appendTo(S)}function v(){CP.showPopupOverlay(),L.find("#name").focus(),J=!0,L.find(".close-button").on("click",g),Hub.pub("popup-open",I),CP.HelpFlyouts.init()}function g(e){e&&e.preventDefault(),J&&(CP.hidePopupOverlay(),L.remove(),J=!1)}function m(e){return $(e.target).find("option:selected").val()}function C(e){return"pen"===X?CP.pen.slug_hash:$(e.target).closest(".single-pen").data("slug-hash")}function P(){var e=$(".collection-settings-form").serializeObject();CP.collection.updateViewModel(e)}function w(e,t){var n=Copy.collectionUpdated;return O||(n=k?Copy.collectionSavedPenAdded:Copy.collectionCreated),_.template(n,{originalId:e,name:t.name,url:"/collection/"+CP.collection.getActiveSlugHash()})}function D(e,t){var n;CP.collection.selectedPenSlugHash=t,n=e?"/collections/"+e+"/edit?slug_hash="+t:"/collections/new",$.ajax({url:n,success:s})}function y(e,t){$.showMessage(w(e,t),"slow")}function T(e){g(),A&&(H.html(e.name),CP.TextFormatter.formatText(e.description,function(e){F.html(e.text),x()})),b(e)}function b(e){(!0===e["private"]?j:E).append($("<option></option>").attr("value",e.slug_hash).text(e.name)),R.val("__choose__")}function M(){var e=F.find(".private-icon");e.length?e.toggle():x()}function x(){CP.collection.VM["private"]&&F.prepend("<span class='private-icon left'><svg class='icon-lock'><use xlink:href='#lock'></use></svg></span>")}CP.createEditCollection={};var L,A,k,O,S=$("body"),U=$("#popup-overlay"),j=$(".collection-options-public"),E=$(".collection-options-private"),H=$("#collection-name"),F=$("#collection-desc"),R=$(".collection-choice"),V="__add__",I="createEditCollection",J=!1,X=window.__pageType;CP.createEditCollection.init=function(){CP.collection.init(),CP.TextFormatter.init(),e(),u()}}();var DeleteCollection=Class.extend({init:function(){_.extend(this,AJAXUtil),this._bindToDOM()},_bindToDOM:function(){$("body").on("click",".delete-collection",$.proxy(this._onDeleteCollection,this)).on("click",".delete-collection-from-grid",$.proxy(this._onDeleteCollection,this)).on("click","#confirm-delete[data-item='collection']",$.proxy(this._deleteConfirmed,this))},_onDeleteCollection:function(e){e.preventDefault(),$.showModal("/ajax/collections/confirm_collection_delete"+this._getParams(e),"modal-warning")},_getParams:function(e){return"?collection_slug_hash="+$(e.target).data("slug-hash")+"&pagetype="+$(e.target).data("pagetype")},_deleteConfirmed:function(e){e.preventDefault(),this.del(this._getDeleteURL(e),{},this._getOnDoneFunc(e))},_getDeleteURL:function(e){return"/collections/"+$(e.target).data("slug-hash")},_getOnDoneFunc:function(e){return"grid"===$(e.target).data("pagetype")?this._doneDeleteCollectionOnGrid:this._doneDeleteCollection},_doneDeleteCollectionOnGrid:function(e){this._doneDeleteStandard(e),Hub.pub("collection-deleted",e)},_doneDeleteCollection:function(e){this._doneDeleteStandard(e),setTimeout(function(){window.location="/dashboard"},400)},_doneDeleteStandard:function(e){$.hideModal(),$.showMessage(this._getDoneDeleteCollectionMessage(e),"slow")},_getDoneDeleteCollectionMessage:function(e){return _.template(Copy.collectionDeleted,{name:e.collection.name})}}),PenDeleteOnOverlay=Class.extend({deletePenData:{},undoDeletePenTimeout:1e4,init:function(){_.extend(this,AJAXUtil),this._bindToDOM(),this._checkLocalStorage()},_checkLocalStorage:function(){CPLocalStorage.getItem("pen_deleted")&&(this.deletePenData=JSON.parse(CPLocalStorage.getItem("pen_deleted")),CPLocalStorage.removeItem("pen_deleted"),this._showRestoreDeletedPenMessage())},_bindToDOM:function(){$("body").on("click",".delete-pen",$.proxy(this._onDeletePen,this)).on("click","#restore-deleted-pen",$.proxy(this._undoDelete,this))},_onDeletePen:function(e){e.preventDefault(),this._deletePen($(e.target).data("id"),$(e.target).data("slug-hash"))},_deletePen:function(e,t){this.deletePenData.penID=e,this.deletePenData.activeSlugHash=t,this._showConfirmDeleteModal()},_showConfirmDeleteModal:function(){$.showModal("/ajax/confirm_pen_delete","modal-warning",$.proxy(this._deletePenModalCallback,this))},_deletePenModalCallback:function(){$("#confirm-delete")._on("click",this._deletePenConfirmed,this)},_deletePenConfirmed:function(){this._sendDeleteToServer(),this._removePenFromGrid(),this._showRestoreDeletedPenMessage()},_sendDeleteToServer:function(){this.del("/pen/"+this.deletePenData.activeSlugHash,{},this.doneDelete,this.failedDelete)},_removePenFromGrid:function(){$("#del-pen-"+this.deletePenData.penID).closest(".single-pen").slideUp("",function(){$(this).remove()})},_showRestoreDeletedPenMessage:function(){$.showMessage(_.template(this._restorePenMessage(),this.deletePenData),"super-slow")},_restorePenMessage:function(){return"Your pen was deleted. <a id='restore-deleted-pen' data-id='<%= penID %>' data-slug-hash='<%= activeSlugHash %>' href='#0'>Undo?</a>"},DONE_DELETE_TIMEOUT:500,doneDelete:function(){$.hideOverlay(),setTimeout(function(){Page.renderPages(window.__pages)},this.DONE_DELETE_TIMEOUT)},failedDelete:function(e){$.hideMessage(),this.showStandardErrorMessage(e)},_undoDelete:function(e){e.preventDefault(),$.showMessage("Recovering pen...",this.undoDeletePenTimeout),this.post(this._getUndoDeleteURL(e),{},this._doneUndoDelete)},_getUndoDeleteURL:function(e){return"/pen/restore/"+$(e.target).attr("data-slug-hash")},_doneUndoDelete:function(){$.hideMessage(),Page.renderPages(window.__pages)}}),ProjectDeleteOnOverlay=Class.extend({deleteProjectData:{},init:function(){_.extend(this,AJAXUtil),this._bindToDOM()},_bindToDOM:function(){$("body").on("click",".delete-project",$.proxy(this._onDeleteProject,this))},_onDeleteProject:function(e){e.preventDefault(),this._deleteProject($(e.target).data("id"),$(e.target).data("slug-hash"))},_deleteProject:function(e,t){this.deleteProjectData.id=e,this.deleteProjectData.hashid=t,this._showConfirmDeleteModal()},_showConfirmDeleteModal:function(){$.showModal("/ajax/confirm_project_delete","modal-warning",$.proxy(this._deleteProjectModalCallback,this))},_deleteProjectModalCallback:function(){$("#confirm-delete")._on("click",this._deleteProjectConfirmed,this)},_deleteProjectConfirmed:function(){"delete"===$("#confirm-delete-input").val()&&(this._sendDeleteToServer(),this._removeProjectFromGrid())},_sendDeleteToServer:function(){this.del("/projects/project/"+this.deleteProjectData.hashid,{},this.doneDelete,this.failedDelete)},_removeProjectFromGrid:function(){$("#del-project-"+this.deleteProjectData.id).closest(".single-project").slideUp("",function(){$(this).remove()})},DONE_DELETE_TIMEOUT:500,doneDelete:function(e){$.hideMessage(),$.hideOverlay(),e.payload.remaining_projects>0&&$(".new-project-button.upsell").removeClass("upsell").removeAttr("data-url").off("click"),setTimeout(function(){Page.renderPages(window.__pages)},this.DONE_DELETE_TIMEOUT)},failedDelete:function(e){$.hideMessage(),this.showStandardErrorMessage(e)}}),RemoveAsTemplateOverlay=Class.extend({init:function(){_.extend(this,AJAXUtil),this._bindToDOM()},_bindToDOM:function(){$("body").on("click",".untemplate-pen",$.proxy(this._onUntemplatePen,this))},_onUntemplatePen:function(e){e.preventDefault(),this._untemplatePen($(e.target).data("hashid")),this._removePenFromPage($(e.target).data("hashid")),this._showMessage()},_untemplatePen:function(e){this.del("/templates/"+e,{item_type:"pen"},this._doneUntemplate)},_removePenFromPage:function(e){$("#untemplate-pen-"+e).closest(".single-pen").slideUp("",function(){$(this).remove()})},_showMessage:function(){$.showMessage(this._removedMessage(),"super-slow")},_removedMessage:function(){return"Your Pen was removed from your templates."},_doneUntemplate:function(){$.hideOverlay(),Page.renderPages(window.__pages)}});new CollectionsFlyout,CP.createEditCollection.init(),new DeleteCollection,CP.collectionAddPen.init(),new CollectionRemovePen,new PenDeleteOnOverlay,new ProjectDeleteOnOverlay,new RemoveAsTemplateOverlay,function(){function e(){var e=window.location.search.match(/page=(\d+)/);return e&&e[1]?e[1]:"1"}function t(){var e={};return $(".search-select").toArray().forEach(function(t){e[t.name]=t.value}),e}function n(n){var o;return o=n?1:e(),Object.assign({},{q:$("#q").val(),page:o},t())}function o(){return $(".search-results-tabs .active").data("type")}function i(e){var t="";for(var n in e)t+="&"+n+"="+encodeURIComponent(e[n]);return t.replace(/^&/,"")}function l(e){var t=i(n(e));return"/search/"+o()+"?"+t}function a(e){e&&e.preventDefault(),s(l())}function c(e){e&&e.preventDefault(),s(l(!0))}function s(e,t){AJAXUtil.post(e,{},r),d(),t||(window.history[p?"pushState":"replaceState"](e,"",e),p=!0)}function r(e){$("#results").html('<div class="search-results pen-grid">'+e.grid+"</div>")}function d(){$("#results").html(u())}function u(){return'<div id="loading-text" class="pricing-table-header loading-text">Loading<span>..................</span></div>'}function h(e){e.preventDefault(),s($(e.target).attr("href"))}function f(){$(".search-form")._on("submit",c,this),$(".search-select")._on("change",a,this),$("body").on("click","a.pagination-button",h),Keytrap.bind("left",function(){$("a.pagination-button[data-key='left']").click()}),Keytrap.bind("right",function(){$("a.pagination-button[data-key='right']").click()}),$(window).on("popstate",function(){s(window.location.pathname+window.location.search,!0);var e=/q=(.*?)(?:&|$)/.exec(window.location.search)[1];$("#q").val(e)})}var p=!1;$("#q").putCursorAtEnd(),f(),a()}();