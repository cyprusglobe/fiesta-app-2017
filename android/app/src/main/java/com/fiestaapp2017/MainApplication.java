package com.fiestaapp2017;

import com.facebook.react.ReactPackage;
import com.microsoft.codepush.react.CodePush;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public void onCreate() {
    super.onCreate();
    setActivityCallbacks(new ActivityCallbacks() {
        @Override
        public void onActivityCreated(Activity activity, Bundle savedInstanceState) {

        }

        @Override
        public void onActivityStarted(Activity activity) {

        }

        @Override
        public void onActivityResumed(Activity activity) {

        }

        @Override
        public void onActivityPaused(Activity activity) {

        }

        @Override
        public void onActivityStopped(Activity activity) {

        }

        @Override
        public void onActivityResult(int requestCode, int resultCode, Intent data) {

        }

        @Override
        public void onActivityDestroyed(Activity activity) {

        }
    });
  }

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
            new CodePush("rGBMHmBiNyufw2vac_zSx0g985fS4JhxgyNoG", MainApplication.this, BuildConfig.DEBUG)
    );
  }
}
