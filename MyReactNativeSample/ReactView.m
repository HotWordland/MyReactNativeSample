//
//  ReactView.m
//  MyReactNativeSample
//
//  Created by 情热大陆 on 15/11/12.
//  Copyright © 2015年 情热大陆-巫龙. All rights reserved.
//

#import "ReactView.h"
#import "RCTRootView.h"
@implementation ReactView
-(void)awakeFromNib
{
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
    // For production use, this `NSURL` could instead point to a pre-bundled file on disk:
    //
    //   NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
    //
    // To generate that file, run the curl command and add the output to your main Xcode build target:
    //
    //   curl http://localhost:8081/index.ios.bundle -o main.jsbundle
    RCTRootView *rootView = [[RCTRootView alloc]initWithBundleURL:jsCodeLocation moduleName:@"MyReactNativeSample" initialProperties:nil launchOptions:nil];
    [self addSubview:rootView];
    [rootView setTranslatesAutoresizingMaskIntoConstraints:NO];
    CENTER(rootView);
    CONSTRAIN_SIZE(rootView, SCREEN_WIDTH, SCREEN_HEIGHT);
}
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
