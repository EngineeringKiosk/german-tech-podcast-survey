<template>
    <section class="bg-white shadow-sm rounded-lg p-6">
        <div>
            <label :for="id" class="block text-xl font-semibold text-gray-900" :class="subtitle ? 'mb-2' : 'mb-4'">
                {{ legend }}
            </label>
            <p v-if="subtitle" class="text-sm text-gray-500 mb-4">{{ subtitle }}</p>
            <textarea :id="id" :value="modelValue" :rows="rows ?? 4" :placeholder="placeholder ?? 'Deine Antwort...'"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" />
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    id: string
    legend: string
    subtitle?: string
    modelValue: string
    rows?: number
    placeholder?: string
}>()

defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>
