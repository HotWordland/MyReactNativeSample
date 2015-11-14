//
//  RCTMapManager.m
//  MyReactNativeSample
//
//  Created by 情热大陆 on 15/11/13.
//  Copyright © 2015年 情热大陆-巫龙. All rights reserved.
//

#import "MyCustomViewManager.h"

@implementation MyCustomViewManager

RCT_EXPORT_MODULE()
RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

- (UIView *)view
{
//    return [[MKMapView alloc] init];
    UIView *view = [[UIView alloc]init];
    UILabel *label = [[UILabel alloc]initWithFrame:CGRectMake(10, 20, 50, 21)];
    [view addSubview:label];
    [label setText:@"haha"];
    [view setBackgroundColor:[UIColor purpleColor]];
    return view;
}

@end
