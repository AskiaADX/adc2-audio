(function () {
    var audio = new Audio({
        instanceId: {%= CurrentADC.InstanceId %},
        autosubmit: {%= CurrentADC.PropValue("autosubmit") %},
        javascriptSupport: {%= Browser.Support("javascript") %},
        controls: {%= On(CurrentADC.PropValue("controls") <> "true",0,1) %},
        autoplay: {%= On(CurrentADC.PropValue("autoplay") <> "true",0,1) %}
    });
} ());