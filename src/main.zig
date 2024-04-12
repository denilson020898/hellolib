const std = @import("std");

pub var buffer = [_]u32{ 1, 3, 2, 4 };

extern fn console_log(a: i32) void;

export fn add(a: i32, b: i32) i32 {
    const result = a + b;
    // console_log(result);
    return result;
}
