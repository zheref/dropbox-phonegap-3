//
//  DropboxPlugin.h
//  FSTester
//
//  Created by SERGIO DANIEL LOZANO on 01/18/14.
//
//

#import <Cordova/CDV.h>
#import "DropboxPlugin.h"

@interface DropboxPlugin : CDVPlugin

- (void) link:(CDVInvokedUrlCommand*) command;

- (void) checkLink:(CDVInvokedUrlCommand*) command;

- (void) unlink:(CDVInvokedUrlCommand*) command;

- (void) listFolder:(CDVInvokedUrlCommand*) command;

- (void) syncFolder:(CDVInvokedUrlCommand*) command;

- (void) addObserver:(CDVInvokedUrlCommand*) command;

- (void) readData:(CDVInvokedUrlCommand*) command;

- (void) readString:(CDVInvokedUrlCommand*) command;

@end