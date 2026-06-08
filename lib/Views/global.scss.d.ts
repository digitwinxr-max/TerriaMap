declare namespace GlobalScssNamespace {
  export interface IGlobalScss {
    active: string;
    collapsed: string;
    "digtwinxr-capability-content": string;
    "digtwinxr-capability-header": string;
    "digtwinxr-capability-panel": string;
    "digtwinxr-capability-title": string;
    "digtwinxr-capability-toggle": string;
    "digtwinxr-pulse": string;
    "digtwinxr-view-btn": string;
    "digtwinxr-view-controls": string;
    "digtwinxr-view-controls__header": string;
    "digtwinxr-view-controls__options": string;
    "digtwinxr-view-controls__title": string;
    "digtwinxr-view-controls__toggle": string;
    "digtwinxr-view-icon": string;
    digtwinxrCapabilityContent: string;
    digtwinxrCapabilityHeader: string;
    digtwinxrCapabilityPanel: string;
    digtwinxrCapabilityTitle: string;
    digtwinxrCapabilityToggle: string;
    digtwinxrPulse: string;
    digtwinxrViewBtn: string;
    digtwinxrViewControls: string;
    digtwinxrViewControlsHeader: string;
    digtwinxrViewControlsOptions: string;
    digtwinxrViewControlsTitle: string;
    digtwinxrViewControlsToggle: string;
    digtwinxrViewIcon: string;
    rcSliderTooltipZoomDownIn: string;
    rcSliderTooltipZoomDownOut: string;
    "react-datepicker__month--selecting-range": string;
    "react-datepicker__year--selecting-range": string;
    reactDatepickerMonthSelectingRange: string;
    reactDatepickerYearSelectingRange: string;
  }
}

declare const GlobalScssModule: GlobalScssNamespace.IGlobalScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GlobalScssNamespace.IGlobalScss;
};

export = GlobalScssModule;
