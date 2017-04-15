package com.fiestaapp2017;

import com.facebook.react.ReactPackage;
import com.microsoft.codepush.react.CodePush;
import com.reactnativenavigation.NavigationApplication;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return Arrays.<ReactPackage>asList(
            new CodePush("rGBMHmBiNyufw2vac_zSx0g985fS4JhxgyNoG", MainApplication.this, BuildConfig.DEBUG),
            new VectorIconsPackage()
    );
  }
}
