cmd_Release/obj.target/fibers/src/libcoro/coro.o := cc '-DNODE_GYP_MODULE_NAME=fibers' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DUSE_CORO' '-DCORO_GUARDPAGES=1' '-DCORO_ASM' '-DBUILDING_NODE_EXTENSION' -I/Users/docyes/.node-gyp/9.5.0/include/node -I/Users/docyes/.node-gyp/9.5.0/src -I/Users/docyes/.node-gyp/9.5.0/deps/uv/include -I/Users/docyes/.node-gyp/9.5.0/deps/v8/include  -O3 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/fibers/src/libcoro/coro.o.d.raw   -c -o Release/obj.target/fibers/src/libcoro/coro.o ../src/libcoro/coro.c
Release/obj.target/fibers/src/libcoro/coro.o: ../src/libcoro/coro.c \
  ../src/libcoro/coro.h
../src/libcoro/coro.c:
../src/libcoro/coro.h:
