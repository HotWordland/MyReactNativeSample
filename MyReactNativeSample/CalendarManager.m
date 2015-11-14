//
//  CalendarManager.m
//  MyReactNativeSample
//
//  Created by 情热大陆 on 15/11/12.
//  Copyright © 2015年 情热大陆-巫龙. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
    NSString *loginfo = [NSString stringWithFormat:@"Pretending to create an event %@ at %@", name, location];
    NSLog(@"%@",loginfo);
}
@end
