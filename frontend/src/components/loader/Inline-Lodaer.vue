<template>
    <Spin fix>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
    </Spin>
</template >

<style>
.demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
    from {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>