<template>
  <el-button @click="handleValidateNumber('222')">校验数字</el-button>
  <el-button @click="handleValidateNumber(222)">校验数字2</el-button>
  <el-button @click="handleValidateEmail('1159469891@qq.com')"
    >校验邮箱</el-button
  >
  <el-button @click="handleValidatePorts('11111')">校验端口</el-button>
  <el-button @click="handleValidateIp('192.168.2.1:89')">校验IP</el-button>
  <el-button @click="handleValidateIp('fd25:1890:cdaf::/48')">校验IP</el-button>
</template>

<script setup lang="ts">
import {
  validateNumber,
  validateEmail,
  validatePorts,
  validateIp
} from 'universal-tools';

const handleValidateNumber = (value) => {
  console.log(validateNumber(value), 'validateNumber');
};

const handleValidateEmail = (value: string) => {
  console.log(validateEmail(value), 'validateEmail');
};

const handleValidatePorts = (value: string) => {
  console.log(validatePorts(value), 'validatePorts');
};

const handleValidateIp = (value: string) => {
  console.log(validateIp(value), 'validateIp');
};
</script>
