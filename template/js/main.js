import MobileModule from "./module/MobileModule.js";
import AosModule from "./module/AosModule.js";
import BtnToTopModule from "./module/BtnToTopModule.js";
import PopupModule from "./module/PopupModule.js";
import SwiperModule from "./module/SwiperModule.js";
import CountUpModule from "./module/CountUpModule.js";
import CheckModule from "./module/CheckModule.js";
import SearchModule from "./module/SearchModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import IsotopeModule from "./module/IsotopeModule.js";
import HeaderModule from "./module/HeaderModule.js";
import PlusMinusModule from "./module/PlusMinusModule.js";
import SideModule from "./module/SideModule.js";
import ShowHideModule from "./module/ShowHideModule.js";
import CollapseModule from "./module/CollapseModule.js";
import AnimatedModule from "./module/AnimatedModule.js";
import ScrollTriggerModule from "./module/ScrollTriggerModule.js";
import LoadMoreModule from "./module/LoadMoreModule.js";
import ComponentModule from "./module/ComponentModule.js";
import DatePickerModule from "./module/DatePickerModule.js";

window.addEventListener("DOMContentLoaded", () => {
    // Animation
    AnimatedModule();
    ScrollTriggerModule();
    AosModule();
    // Loadmore
    LoadMoreModule();
    ShowHideModule();
    // Tab
    TabModule();
    IsotopeModule();
    // Upload File
    // DateTime
    DatePickerModule();
    // PlusMinus
    PlusMinusModule();
    // Select
    Select2Module();
    // CountUP
    CountUpModule();
    // Component
    SwiperModule();
    MobileModule();
    BtnToTopModule();
    HeaderModule();
    PopupModule();
    CheckModule();
    GalleryModule();
    SearchModule();
    SideModule();
    CollapseModule();
    ComponentModule();
});