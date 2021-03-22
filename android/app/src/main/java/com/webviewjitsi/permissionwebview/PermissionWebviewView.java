package com.webviewjitsi.permissionwebview;
import android.content.Context;
import android.widget.LinearLayout;
import android.os.Bundle;
import android.widget.Toast;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.PermissionRequest;
import android.webkit.WebSettings;
import android.net.http.SslCertificate;
import android.net.http.SslError;
import android.webkit.SslErrorHandler;
import androidx.core.app.ActivityCompat;
import android.app.LocalActivityManager;
import android.view.ViewGroup;
import android.Manifest;
import android.app.Activity;
import com.webviewjitsi.MainActivity;
import com.webviewjitsi.R;

public class PermissionWebviewView extends WebView{

    private Context context;

    public PermissionWebviewView(Context context) {
        super(context);
        this.context = context;

        this.setWebViewClient(new WebViewClient());

        WebSettings webSettings = this.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setUseWideViewPort(true);
        webSettings.setDomStorageEnabled(true);

        this.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                request.grant(request.getResources());
            }
        });
    }
}
