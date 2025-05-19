<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
  >
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="ruleForm.email" placeholder="请输入邮箱" />
    </el-form-item>
    <el-form-item label="IPV4" prop="ipv4">
      <el-input
        v-model="ruleForm.ipv4"
        placeholder="请输入ipv4"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="IPV6" prop="ipv6">
      <el-input v-model.number="ruleForm.ipv6" placeholder="请输入ipv6" />
    </el-form-item>
    <el-form-item label="端口" prop="port">
      <el-input v-model.number="ruleForm.port" placeholder="请输入端口" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { validateEmail, validatePorts, validateIp } from 'universal-tools';

import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  email: '',
  ipv4: '',
  ipv6: '',
  port: ''
});

const handleValidateIpv4 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入IPV4地址！'));
  }
  if (!validateIp(value)) {
    callback(new Error('请输入正确的IPV4地址！'));
  }
  callback();
};
const handleValidateEmail = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入邮箱'));
  } else if (!validateEmail(value)) {
    callback(new Error('请输入正确的邮箱格式！'));
  } else {
    callback();
  }
};

const handleValidateIpv6 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入IPV6地址！'));
  }
  if (!validateIp(value)) {
    callback(new Error('请输入正确的IPV6地址！'));
  }
  callback();
};
const handleValidatePort = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入端口号！'));
  }
  if (!validatePorts(value)) {
    callback(new Error('请输入正确的端口号！'));
  }
  callback();
};

const rules = reactive<FormRules<typeof ruleForm>>({
  email: [
    { required: true, validator: handleValidateEmail, trigger: 'change' }
  ],
  ipv4: [{ required: true, validator: handleValidateIpv4, trigger: 'change' }],
  ipv6: [{ required: true, validator: handleValidateIpv6, trigger: 'change' }],
  port: [{ required: true, validator: handleValidatePort, trigger: 'change' }]
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!');
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
